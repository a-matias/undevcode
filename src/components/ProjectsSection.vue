<template>
  <section id="proyectos" class="projects-section">
    <div class="projects-container">
      
      <div class="section-header">
        <h2 class="section-title">
          NUESTRO <span class="highlight">TRABAJO</span>
        </h2>
        <p class="section-subtitle">
          Ingeniería de software aplicada a soluciones reales. 
          Selección de nuestros desarrollos más recientes.
        </p>
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
                <svg class="arrow-icon" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
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
              <div>
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

// Datos Simulados (Asegúrate de tener las imágenes en /public)
const projects = [
  {
    name: 'FlexiTaim',
    shortDescription: 'Gestión de turnos inteligente con pagos QR automatizados.',
    fullDescription: 'FlexiTaim revoluciona la gestión de reservas permitiendo a los negocios automatizar su calendario. Incluye recordatorios por WhatsApp, pagos integrados con MercadoPago y un panel de administración en tiempo real.',
    image: '/project-flexitaim.svg', // Ruta relativa a public
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

// Lógica de Tilt 3D Suavizada
const handleTilt = (e) => {
  const card = e.currentTarget.querySelector('.project-card');
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = ((y - centerY) / 20) * -1; // Invertimos para efecto natural
  const rotateY = (x - centerX) / 20;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
};

const resetCard = (e) => {
  const card = e.currentTarget.querySelector('.project-card');
  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
};

// Control del Modal y Scroll del Body
const openProject = (index) => {
  selectedProject.value = index;
};

const closeProject = () => {
  selectedProject.value = null;
};

watch(selectedProject, (val) => {
  if (val !== null) {
    document.body.style.overflow = 'hidden'; // Bloquear scroll
  } else {
    document.body.style.overflow = ''; // Restaurar scroll
  }
});
</script>

<style scoped>
/* Importación de fuentes (ya deberías tenerlas en index.html o App.vue, pero por seguridad) */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Inter:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500&display=swap');

.projects-section {
  padding: 6rem 1.5rem;
  background-color: #ffffff; /* Fondo limpio para contrastar con el Hero oscuro */
  position: relative;
}

/* --- HEADER --- */
.projects-container {
  max-width: 1280px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 5rem;
  text-align: center; /* Centrado en móvil */
}

@media (min-width: 1024px) {
  .section-header {
    text-align: left; /* Alineado izq en desktop */
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
}

.section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3.5rem, 6vw, 5.5rem);
  line-height: 0.9; /* Corregido para evitar superposición */
  color: #171717;
  margin-bottom: 2rem;
  letter-spacing: 1px;
}

.section-title .highlight {
  color: transparent;
  -webkit-text-stroke: 0.5px #0a0a0a;
  display: block;
  margin-top: 5px; /* Un pequeño respiro visual en móvil */
}

@media (min-width: 1024px) {
  .section-title .highlight {
    display: inline;
    margin-top: 0;
  }
}

.section-subtitle {
  font-family: 'Inter', sans-serif;
  color: #737373;
  max-width: 500px;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* --- GRID --- */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
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

/* --- CARD --- */
.card-wrapper {
  perspective: 1000px; /* Necesario para el 3D */
  cursor: pointer;
}

.project-card {
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08); /* Sombra suave de alta calidad */
  border: 1px solid rgba(0,0,0,0.05);
  transition: transform 0.1s ease-out, box-shadow 0.3s ease; /* Transición rápida para tilt */
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-wrapper:hover .project-card {
  box-shadow: 0 20px 50px -10px rgba(0,0,0,0.15);
  border-color: rgba(0, 112, 243, 0.2); /* Borde sutil azul al hover */
}

/* Imagen Card */
.card-image-container {
  position: relative;
  height: 240px;
  overflow: hidden;
  background: #f5f5f5;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card-wrapper:hover .card-image {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
}

.card-wrapper:hover .card-overlay {
  opacity: 1;
}

.view-btn {
  background: white;
  color: black;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.card-wrapper:hover .view-btn {
  transform: translateY(0);
}

/* Contenido Card */
.card-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.card-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #171717;
}

.arrow-icon {
  color: #d4d4d4;
  transition: color 0.3s, transform 0.3s;
}

.card-wrapper:hover .arrow-icon {
  color: #0070f3;
  transform: translate(3px, -3px);
}

.card-desc {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #737373;
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
  color: #4b5563;
  font-size: 0.75rem;
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  font-weight: 600;
  font-family: 'Space Grotesk', monospace;
}

.tech-tag.more {
  background: white;
  border: 1px solid #e5e5e5;
}

/* --- MODAL --- */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px); /* Efecto vidrio moderno */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal-container {
  background: white;
  width: 100%;
  max-width: 1000px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 24px;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255,255,255,0.9);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background 0.2s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.close-btn:hover {
  background: #f5f5f5;
}

.modal-body {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .modal-body {
    flex-direction: row;
    height: 600px; /* Altura fija en desktop para diseño split */
  }
}

.modal-visual {
  width: 100%;
  height: 300px;
  background: #f5f5f5;
}

@media (min-width: 768px) {
  .modal-visual {
    width: 55%;
    height: 100%;
  }
}

.modal-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
}

@media (min-width: 768px) {
  .modal-info {
    width: 45%;
    padding: 3rem;
  }
}

.modal-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.modal-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.modal-tag {
  border: 1px solid #e5e5e5;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  color: #525252;
}

.modal-description {
  font-family: 'Inter', sans-serif;
  line-height: 1.7;
  color: #525252;
  font-size: 1rem;
}

.launch-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #000;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  transition: transform 0.2s, background 0.2s;
}

.launch-btn:hover {
  background: #1a1a1a;
  transform: translateY(-2px);
}

/* Transiciones de Vue */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-container {
  animation: modal-slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-fade-leave-active .modal-container {
  animation: modal-slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse;
}

@keyframes modal-slide-up {
  from {
    transform: translateY(40px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}
</style>