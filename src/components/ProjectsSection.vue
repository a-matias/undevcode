<template>
  <section id="proyectos" class="projects-section">
    <div class="projects-container">
      
      <div class="section-header">
        <div class="title-container">
          <h2 class="section-title">
            NUESTRO <br class="mobile-break" />
            <span class="highlight">TRABAJO</span><span class="dot">.</span>
          </h2>
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
              <div class="info-top">
                <h2 class="modal-title">{{ projects[selectedProject].name }}</h2>
                <div class="modal-tags-list">
                  <span v-for="tag in projects[selectedProject].tags" :key="tag" class="modal-tag">
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

// Datos Simulados
const projects = [
  {
    name: 'FlexiTaim',
    shortDescription: 'Gestión de turnos inteligente con pagos QR automatizados.',
    fullDescription: 'FlexiTaim revoluciona la gestión de reservas permitiendo a los negocios automatizar su calendario. Incluye recordatorios por WhatsApp, pagos integrados con MercadoPago y un panel de administración en tiempo real.',
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
    tags: ['React', 'Next.js', 'Firebase', 'AWS S3'],
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

watch(selectedProject, (val) => {
  document.body.style.overflow = val !== null ? 'hidden' : '';
});
</script>

<style scoped>
/* FUENTES */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Inter:wght@300;400;500;600&family=Bebas+Neue&display=swap');

.projects-section {
  padding: 8rem 1.5rem; /* Más aire arriba y abajo */
  background-color: #fcfcfc; /* Un blanco técnico muy sutil */
  color: #1a1a1a;
}

.projects-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* --- HEADER MINIMALISTA & PROFESIONAL --- */
.section-header {
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .section-header {
    flex-direction: row;
    /* CLAVE: Alineamos al final para que la base del texto coincida */
    align-items: flex-end; 
    justify-content: space-between;
  }
}

.section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(4rem, 8vw, 7rem); /* Grande e impactante */
  line-height: 0.85;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: 1px;
}

.section-title .highlight {
  color: #2563eb; /* Azul Tech Profesional (Royal Blue) */
}

/* El punto final de estilo */
.section-title .dot {
  color: #2563eb;
  display: inline-block;
}

.mobile-break {
  display: block;
}

@media (min-width: 1024px) {
  .mobile-break {
    display: none; /* En desktop todo en una línea si cabe */
  }
}

/* Contenedor del subtítulo con línea decorativa */
.subtitle-container {
  position: relative;
}

.section-subtitle {
  font-family: 'Inter', sans-serif;
  color: #525252;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 450px;
  font-weight: 400;
}

@media (min-width: 1024px) {
  .subtitle-container {
    padding-left: 2rem;
    border-left: 1px solid #e5e5e5; /* Línea separadora elegante */
    margin-bottom: 10px; /* Pequeño ajuste visual */
  }
  
  .section-subtitle {
    margin: 0;
  }
}

/* --- GRID --- */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1280px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* --- CARD DESIGN CLEAN --- */
.card-wrapper {
  perspective: 1000px;
  cursor: pointer;
}

.project-card {
  background: #ffffff;
  border-radius: 16px; /* Bordes un poco menos redondeados para ser más pro */
  overflow: hidden;
  /* Sombra difusa estilo moderno */
  box-shadow: 0 4px 20px rgba(0,0,0,0.03); 
  border: 1px solid rgba(0,0,0,0.04);
  transition: transform 0.1s ease-out, box-shadow 0.3s ease, border-color 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-wrapper:hover .project-card {
  box-shadow: 0 20px 40px -5px rgba(0,0,0,0.08);
  border-color: rgba(37, 99, 235, 0.2); /* Borde azul muy sutil */
}

/* Imagen */
.card-image-container {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: #f1f5f9; /* Gris muy claro de fondo */
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1); /* Transición premium */
}

.card-wrapper:hover .card-image {
  transform: scale(1.08);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(4px); /* Blur más fuerte */
}

.card-wrapper:hover .card-overlay {
  opacity: 1;
}

.view-btn {
  background: white;
  color: #1a1a1a;
  padding: 0.7rem 1.4rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  transform: translateY(15px);
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.card-wrapper:hover .view-btn {
  transform: translateY(0);
}

/* Contenido Card */
.card-content {
  padding: 1.8rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.8rem;
}

.card-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.2;
}

.icon-box {
  background: #f3f4f6;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.card-wrapper:hover .icon-box {
  background: #2563eb;
}

.arrow-icon {
  color: #9ca3af;
  transition: color 0.3s ease;
}

.card-wrapper:hover .arrow-icon {
  color: white;
}

.card-desc {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #64748b; /* Slate 500 */
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

/* Tags Minimalistas */
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: transparent;
  border: 1px solid #e2e8f0;
  color: #475569;
  font-size: 0.7rem;
  padding: 0.25rem 0.7rem;
  border-radius: 4px;
  font-weight: 500;
  font-family: 'Space Grotesk', monospace;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tech-tag.more {
  background: #f8fafc;
  color: #94a3b8;
  border: none;
}

/* --- MODAL (Estilo Apple/Clean) --- */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8); /* Fondo blanco translúcido */
  backdrop-filter: blur(12px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-container {
  background: #ffffff;
  width: 100%;
  max-width: 950px;
  height: auto;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 20px;
  position: relative;
  /* Sombra profunda y elegante */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.05);
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: white;
  border: 1px solid #f1f5f9;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.2s;
  color: #64748b;
}

.close-btn:hover {
  background: #f8fafc;
  color: #1a1a1a;
  transform: rotate(90deg);
}

.modal-body {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .modal-body {
    flex-direction: row;
    min-height: 500px;
  }
}

.modal-visual {
  width: 100%;
  height: 250px;
  background: #f8fafc;
}

@media (min-width: 768px) {
  .modal-visual {
    width: 50%;
    height: auto;
    border-right: 1px solid #f1f5f9;
  }
}

.modal-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
}

@media (min-width: 768px) {
  .modal-info {
    width: 50%;
    padding: 3.5rem 3rem;
  }
}

.modal-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: #0f172a;
}

.modal-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.modal-tag {
  background: #f1f5f9;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.75rem;
  color: #475569;
  font-weight: 600;
  font-family: 'Space Grotesk', monospace;
}

.modal-description {
  font-family: 'Inter', sans-serif;
  line-height: 1.8;
  color: #475569;
  font-size: 1rem;
}

.launch-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: #0f172a; /* Slate 900 */
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 8px; /* Botón un poco más cuadrado = más tech */
  font-weight: 600;
  transition: all 0.2s;
  align-self: flex-start;
}

.launch-btn:hover {
  background: #1e293b;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(15, 23, 42, 0.15);
}

/* Transiciones */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-container {
  animation: modal-pop 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-fade-leave-active .modal-container {
  animation: modal-pop 0.2s cubic-bezier(0.16, 1, 0.3, 1) reverse;
}

@keyframes modal-pop {
  from { transform: scale(0.96); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>