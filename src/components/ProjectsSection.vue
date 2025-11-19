<template>
  <section id="proyectos" class="projects">
    <LayoutView>
      <div class="projects-header">
        <h2 class="section-title">Proyectos Destacados</h2>
        <p class="projects-description">
          Explorá algunos de los proyectos más innovadores que hemos desarrollado para nuestros clientes
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="project-item"
          @click="openProject(index)"
          @mousemove="tiltEffect"
          @mouseleave="resetTilt"
        >
          <div class="project-card">
            <div class="project-image-wrapper">
              <img :src="project.image" :alt="project.name" class="project-image" />
              <div class="image-overlay"></div>
            </div>

            <div class="project-info">
              <h3 class="project-title">{{ project.name }}</h3>
              <p class="project-description">{{ project.description }}</p>

              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>
            </div>

            <div class="hover-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <transition name="modal">
        <div v-if="selectedProject !== null" class="modal-overlay" @click="selectedProject = null">
          <div class="modal-content" @click.stop>
            <button class="modal-close" @click="selectedProject = null">
              ✕
            </button>

            <div class="modal-inner">
              <div class="modal-image">
                <img :src="projects[selectedProject].image" />
              </div>

              <div class="modal-details">
                <h2 class="modal-title">{{ projects[selectedProject].name }}</h2>

                <p class="modal-description">
                  {{ projects[selectedProject].description }}
                </p>

                <div class="modal-tags">
                  <span v-for="tag in projects[selectedProject].tags" :key="tag" class="tag large">
                    {{ tag }}
                  </span>
                </div>

                <a 
                  :href="projects[selectedProject].link" 
                  target="_blank" 
                  class="modal-link"
                >
                  Ver Proyecto →
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </LayoutView>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import LayoutView from './LayoutView.vue';

const selectedProject = ref(null);

const openProject = (index) => {
  selectedProject.value = index;
};

const tiltEffect = (event) => {
  const card = event.currentTarget.querySelector('.project-card');
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;

  card.style.transform = `
    rotateX(${-(y / 25)}deg) 
    rotateY(${x / 25}deg)
    scale(1.03)
  `;
};

const resetTilt = (event) => {
  const card = event.currentTarget.querySelector('.project-card');
  card.style.transform = "rotateX(0) rotateY(0) scale(1)";
};

const projects = [
  {
    name: 'FlexiTaim',
    description: 'App de turnos con actitud. Automatiza reservas, pagos, QR y recordatorios con estilo y velocidad.',
    image: 'public/flexitaim.png',
    tags: ['Vue', 'Node.js','Firebase','MySQL'],
    link: 'https://flexitaim.com'
  },
  {
    name: 'Guía Digital',
    description: 'Plataforma autogestionada para publicar negocios, fotos y servicios con pagos integrados.',
    image: 'public/guiadigital.png',
    tags: ['Laravel', 'Bootstrap', 'MySQL'],
    link: 'https://guiadigital.com.ar'
  },
  {
    name: 'ToppinFly',
    description: 'Reservas para restaurantes con gestión de mesas y notificaciones.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React', 'Node.js', 'Tailwind'],
    link: '#'
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');

.projects {
  padding: 6rem 0;
}

/* HEADER */
.projects-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
   font-family: "Bebas Neue", sans-serif;
  font-weight: 500;
  font-size: 3.5rem;
  letter-spacing: 1px;
  font-weight: 500;
}

.projects-description {
  color: #666;
  max-width: 40rem;
  margin: auto;
}

/* GRID */
.projects-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
}

/* CARD BASE */
.project-item {
  perspective: 1200px;
}

.project-card {
  background: white;
  border-radius: 1.2rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.12);
  transition: transform .25s ease, box-shadow .25s ease;
  transform-style: preserve-3d;
  position: relative;
}

.project-item:hover .project-card {
  box-shadow: 0 18px 45px rgba(0,0,0,0.18);
}

/* IMAGE */
.project-image-wrapper {
  height: 230px;
  overflow: hidden;
  position: relative;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .5s ease;
}

.project-item:hover .project-image {
  transform: scale(1.12);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom,transparent,rgba(0,0,0,.3));
}

/* INFO */
.project-info {
  padding: 1.6rem;
}

.project-title {
  font-size: 1.4rem;
  font-weight: 700;
}

.project-description {
  color: #777;
  margin-top: .5rem;
  line-height: 1.5;
}

/* TAGS */
.tag {
  background: rgba(0,112,243,0.12);
  color: #0070f3;
  padding: .35rem .75rem;
  border-radius: 999px;
  font-size: .75rem;
  display: inline-block;
  margin-right: .4rem;
}

/* ARROW */
.hover-arrow {
  position: absolute;
  top: 1rem;
  right: 1rem;
  opacity: 0;
  background: white;
  border-radius: .6rem;
  padding: .4rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  transition: .35s ease;
}

.project-item:hover .hover-arrow {
  opacity: 1;
  transform: translateY(-3px);
}

/* MODAL */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.75);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 1.4rem;
  max-width: 850px;
  width: 100%;
  overflow: hidden;
}

.modal-close {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  font-size: 1.4rem;
  cursor: pointer;
  background: transparent;
  border: none;
}

.modal-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  gap: 2rem;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-title {
  font-size: 2rem;
  font-weight: 800;
}

.modal-description {
  color: #666;
}

.modal-link {
  display: inline-block;
  background: #0070f3;
  color: white;
  padding: .9rem 1.6rem;
  border-radius: .6rem;
  text-decoration: none;
  margin-top: 1rem;
  transition: .3s;
}

.modal-link:hover {
  background: #005ad1;
}
</style>
