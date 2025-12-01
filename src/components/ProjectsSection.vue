<template>
  <section id="proyectos" class="projects-section"  v-scroll-reveal>
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
              <div class="info-top">
                <h2 class="modal-title">{{ projects[selectedProject].name }}</h2>
                
                <div class="modal-tags-list">
                  <span v-for="tag in projects[selectedProject].tags" :key="tag" class="modal-tag">
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

// Mapeo de nombres "humanos" a slugs de SimpleIcons
const iconSlugMap = {
  'Vue.js': 'vuedotjs',         // https://simpleicons.org/icons/vue.svg
  'Node.js': 'nodedotjs',  
  'Firebase': 'firebase',
  'MySQL': 'mysql',
  'Laravel': 'laravel',
  'Bootstrap': 'bootstrap',
  'AWS S3': 'bitbucket',    // Especifico para S3
  'React': 'react',
  'Next.js': 'nextdotjs'
};

// Función helper para obtener la URL
const getIconUrl = (tagName) => {
  const slug = iconSlugMap[tagName];
  if (!slug) return null;
  // cdn.simpleicons.org devuelve el SVG con el color oficial de la marca por defecto
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

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Inter:wght@300;400;500;600&family=Bebas+Neue&display=swap');

.projects-section {
  padding: 5.5rem 1.5rem;
  background-color: #fcfcfc;
  color: #1a1a1a;
}

.projects-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* HEADER */
.section-header {
  margin-bottom: 6rem;
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

.mobile-break {
  display: block;
}

@media (min-width: 1024px) {
  .mobile-break {
    display: none;
  }
}

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
    border-left: 1px solid #e5e5e5;
    margin-bottom: 10px;
  }
  .section-subtitle {
    margin: 0;
  }
}

/* GRID */
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

/* CARD */
/* ============================================
   🖥️ ESTILOS DESKTOP (DEFAULT)
   ============================================ */

.projects-section {
  padding: 4rem 0;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.card-wrapper {
  perspective: 1000px;
}

.project-card {
  width: 22vw;
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  transition: transform 0.4s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-8px);
}

.card-image-container {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .card-image {
  transform: scale(1.08);
}

.card-content {
  padding: 1.6rem;
}

.card-title {
  font-size: 1.6rem;
  margin-bottom: 0.6rem;
  font-weight: 700;
}

.card-desc {
  font-size: 1rem;
  color: #444;
  line-height: 1.45;
  margin-bottom: 1rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tech-tag {
  background: #f3f3f3;
  color: #222;
  padding: 0.3rem 0.7rem;
  border-radius: 10px;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.tag-icon {
  width: 14px;
  height: 14px;
}



/* ==================================================
   📱 TABLET (768px – 1023px)
   ================================================== */

@media (min-width: 768px) and (max-width: 1023px) {

  .project-card {
    width: 100%;
  }

  .card-image-container {
    height: 200px;
  }

  .card-title {
    font-size: 1.4rem;
  }

  .tech-tag {
    font-size: 0.75rem;
  }
}



/* ==================================================
   📱 MOBILE (≤ 767px)
   ==================================================
   👉 FÁCIL DE ENCONTRAR — ÚLTIMO BLOQUE
   ================================================== */

@media (max-width: 767px) {

  /* Contenedor general de la sección */
  .projects-section {
    padding: 3rem 1rem;
  }

  .projects-container {
    gap: 1.5rem;
    justify-content: center;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: 1fr; /* 1 card por fila */
    gap: 1.5rem;
  }

  /* Card Wrapper y Card */
  .card-wrapper {
    width: 90%; /* No ocupa el 100% */
    margin: 0 auto; /* Centrado */
    perspective: none;
  }

  .project-card {
    width: 100%;
    border-radius: 14px;
    overflow: hidden;
    transform: none !important; /* desactivar tilt */
    transition: transform 0.2s ease;
  }

  /* Imagen */
  .card-image-container {
    height: 160px;
  }

  .card-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: none;
  }

  /* Contenido */
  .card-content {
    padding: 1rem 1rem 1.2rem 1rem;
  }

  .card-title {
    font-size: 1.2rem;
  }

  .card-desc {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  /* Tags */
  .card-tags {
    gap: 0.4rem;
  }

  .tech-tag {
    font-size: 0.65rem;
    padding: 0.2rem 0.5rem;
  }

  .tag-icon {
    width: 12px;
    height: 12px;
  }

  /* Overlay y botón */
  .card-overlay {
    opacity: 0; /* quitar hover overlay en mobile */
  }

  .view-btn {
    display: none;
  }

  /* Ajustes header / títulos */
  .section-title {
    font-size: 2.5rem;
    line-height: 1.1;
  }

  .section-subtitle {
    font-size: 1rem;
    line-height: 1.4;
    max-width: 100%;
  }
}


</style>