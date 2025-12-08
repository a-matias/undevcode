<template>
  <section id="proyectos" class="projects-section">
    <div class="projects-container">
      
      <div class="section-header">
        <div class="title-container">
          <h2 class="section-title">
            ALGUNOS DE NUESTROS <br class="mobile-break" />
            <span class="highlight">TRABAJOS</span>
          .</h2>
        </div>
        
        <div class="subtitle-container">
          <p class="section-subtitle">
            Ingeniería de software aplicada a soluciones reales. <br>
            Selección de nuestros desarrollos más recientes.
          </p>
        </div>
      </div>

      <div class="projects-grid">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="card-wrapper"
          @mouseenter="hoveredIndex = index"
          @mouseleave="resetCard($event); hoveredIndex = null"
          @mousemove="handleTilt($event)"
          @click="openProject(index)"
        >
          <div class="project-card">
            <div class="card-image-container">
              <img :src="project.image" :alt="project.name" class="card-image" />
              <div class="card-overlay">
                <span class="view-btn">Ver Detalles</span>
              </div>
            </div>

            <div class="card-content">
              <div class="card-header-row">
                <h3 class="card-title">{{ project.name }}</h3>
                <div class="icon-box">
                  <svg class="arrow-icon" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <p class="card-desc">{{ project.shortDescription }}</p>
              
              <div class="card-tags">
                <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="tech-tag">
                  <img 
                    v-if="getIconUrl(tag)" 
                    :src="getIconUrl(tag)" 
                    :alt="tag" 
                    class="tag-icon" 
                  />
                  {{ tag }}
                </span>
                
                <span v-if="project.tags.length > 3" class="tech-tag more">
                  +{{ project.tags.length - 3 }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="modal-fade">
      <div v-if="selectedProject !== null" class="modal-backdrop" @click="closeProject">
        <div class="modal-container" @click.stop>
          
          <button class="close-btn" @click="closeProject">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div class="modal-body">
            <div class="modal-visual">
              <img :src="projects[selectedProject].image" :alt="projects[selectedProject].name" />
            </div>

            <div class="modal-info">
              <div class="info-scrollable">
                <h2 class="modal-title">{{ projects[selectedProject].name }}</h2>
                
                <div class="modal-tags-list">
                  <span v-for="tag in projects[selectedProject].tags" :key="tag" class="tech-tag large">
                    <img 
                      v-if="getIconUrl(tag)" 
                      :src="getIconUrl(tag)" 
                      :alt="tag" 
                      class="tag-icon" 
                    />
                    {{ tag }}
                  </span>
                </div>
                
                <p class="modal-description">
                  {{ projects[selectedProject].fullDescription }}
                </p>
              </div>

              <a :href="projects[selectedProject].link" target="_blank" class="launch-btn">
                Visitar Sitio
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';

const selectedProject = ref(null);
const hoveredIndex = ref(null);

// Mapeo de iconos
const iconSlugMap = {
  'Vue.js': 'vuedotjs',
  'Node.js': 'nodedotjs',  
  'Firebase': 'firebase',
  'MySQL': 'mysql',
  'Laravel': 'laravel',
  'Bootstrap': 'bootstrap',
  'AWS S3': 'amazonaws', // Corregido slug de AWS
  'React': 'react',
  'Next.js': 'nextdotjs'
};

const getIconUrl = (tagName) => {
  const slug = iconSlugMap[tagName];
  if (!slug) return null;
  return `https://cdn.simpleicons.org/${slug}`;
};

// Datos Simulados
const projects = [
  {
    name: 'FlexiTaim',
    shortDescription: 'Gestión de turnos inteligente con Servicio de Notificación QR automatizados.',
    fullDescription: 'FlexiTaim revoluciona la gestión de reservas permitiendo a los negocios automatizar su calendario. Incluye recordatorios por WhatsApp y un panel de administración en tiempo real.',
    image: '/project-flexitaim.svg', 
    tags: ['Vue.js', 'Node.js', 'Firebase', 'MySQL'],
    link: 'https://flexitaim.com'
  },
  {
    name: 'Guía Digital',
    shortDescription: 'Directorio comercial autogestionable con geolocalización.',
    fullDescription: 'Una plataforma robusta donde los comercios locales pueden crear su presencia digital en minutos. Cuenta con subida de imágenes optimizada, SEO automático y sistema de reviews verificado.',
    image: '/project-guiadigital.svg',
    tags: ['Laravel', 'Bootstrap', 'MySQL', 'AWS S3'],
    link: 'https://guiadigital.com.ar'
  },
  {
    name: 'ToppinFly',
    shortDescription: 'Sistema de reservas gastronómicas de alta demanda.',
    fullDescription: 'Diseñado para restaurantes de alto tráfico, ToppinFly gestiona mesas, listas de espera y pedidos anticipados para reducir el tiempo de rotación de mesas y mejorar la experiencia del comensal.',
    image: '/project-toppingfly.svg',
    tags: ['React', 'Node.js', 'MySQL' ,'AWS S3'],
    link: '#'
  }
];

// Lógica de Tilt 3D
const handleTilt = (e) => {
  const card = e.currentTarget.querySelector('.project-card');
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / 20) * -1;
  const rotateY = (x - centerX) / 20;
  // Usamos style directamente para performace
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
};

const resetCard = (e) => {
  const card = e.currentTarget.querySelector('.project-card');
  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
};

// Modal Logic
const openProject = (index) => {
  selectedProject.value = index;
};

const closeProject = () => {
  selectedProject.value = null;
};

// Bloqueo de scroll cuando el modal está abierto
watch(selectedProject, (val) => {
  if (val !== null) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Inter:wght@300;400;500;600&family=Bebas+Neue&display=swap');

/* --- GENERAL SECTION STYLES --- */
.projects-section {
  padding: 5.5rem 1.5rem;
  background-color: #fcfcfc;
  color: #1a1a1a;
  font-family: 'Inter', sans-serif;
}

.projects-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* --- HEADER --- */
.section-header {
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .section-header {
    flex-direction: row;
    align-items: flex-end; 
    justify-content: space-between;
  }
}

.section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(4rem, 8vw, 7rem);
  line-height: 0.85;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: 1px;
}

.section-title .highlight {
  color: #2563eb;
}

.mobile-break { display: block; }
@media (min-width: 1024px) { .mobile-break { display: none; } }

.subtitle-container { position: relative; }
.section-subtitle {
  color: #525252;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 450px;
}

@media (min-width: 1024px) {
  .subtitle-container {
    padding-left: 2rem;
    border-left: 1px solid #e5e5e5;
    margin-bottom: 10px;
  }
}

/* --- GRID --- */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 768px) { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1280px) { .projects-grid { grid-template-columns: repeat(3, 1fr); } }

/* --- CARDS --- */
.card-wrapper { perspective: 1000px; }

.project-card {
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  transition: transform 0.4s ease;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-image-container {
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.project-card:hover .card-image { transform: scale(1.08); }

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .card-overlay { opacity: 1; }

.view-btn {
  background: white;
  color: #111;
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 0.9rem;
  transform: translateY(10px);
  transition: transform 0.3s;
}

.project-card:hover .view-btn { transform: translateY(0); }

.card-content {
  padding: 1.6rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.6rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  margin: 0;
}

.card-desc {
  font-size: 0.95rem;
  color: #444;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: #f3f4f6;
  color: #374151;
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.tech-tag.large {
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
}

.tag-icon { width: 14px; height: 14px; }

/* --- MODAL (NUEVO CÓDIGO INTEGRADO) --- */

/* 1. Backdrop con Z-INDEX alto y posición fija */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Indispensable para tapar las cards con Tilt */
  padding: 1rem;
}

/* 2. Contenedor del Modal */
.modal-container {
  background: white;
  width: 100%;
  max-width: 900px;
  height: auto;
  max-height: 90vh; /* Limitar altura */
  border-radius: 20px;
  position: relative;
  overflow: hidden; /* Para que el borde redondeado funcione */
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  z-index: 10000;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255,255,255,0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  transition: background 0.2s;
}

.close-btn:hover { background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }

/* 3. Estructura interna del modal */
.modal-body {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto; /* Scroll interno si el contenido es largo */
}

@media (min-width: 768px) {
  .modal-body {
    flex-direction: row;
    overflow: hidden; /* En desktop no scrolleamos todo, solo el texto si hace falta */
  }
}

/* Imagen del modal */
.modal-visual {
  width: 100%;
  height: 250px;
  background: #f0f0f0;
}

@media (min-width: 768px) {
  .modal-visual {
    width: 50%;
    height: auto;
  }
}

.modal-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Información del modal */
.modal-info {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

@media (min-width: 768px) {
  .modal-info { width: 50%; }
}

.info-scrollable {
  overflow-y: auto;
  padding-right: 0.5rem;
}

.modal-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.modal-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.modal-description {
  color: #4b5563;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 2rem;
}

.launch-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #111;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s;
  align-self: flex-start;
  margin-top: auto; /* Empuja el botón al fondo */
}

.launch-btn:hover { background: #333; }

/* 4. ANIMACIONES (Transition Vue) */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-container,
.modal-fade-leave-active .modal-container {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-fade-enter-from .modal-container,
.modal-fade-leave-to .modal-container {
  transform: scale(0.9) translateY(20px);
}
</style>