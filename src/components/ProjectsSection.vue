<template>
  <section id="proyectos" class="projects">
    <LayoutView>
      <div class="projects-header">
        <h2 class="section-title">
          Proyectos Destacados
        </h2>
        <p class="projects-description">
          Explorá algunos de los proyectos más innovadores que hemos desarrollado para nuestros clientes
        </p>
      </div>

      <!-- Carousel Container -->
      <div 
        ref="projectsSliderRef"
        class="projects-carousel"
      >
        <div class="carousel-wrapper">
          <!-- Project Slides -->
          <div class="carousel-track">
            <div 
              v-for="(project, index) in projects" 
              :key="index"
              class="project-slide"
              :class="{ 'active': index === currentProjectIndex }"
            >
              <div class="project-card">
                <div class="project-image">
                  <img :src="project.image" :alt="project.name" />
                  <div class="project-overlay">
                    <a :href="project.link" target="_blank" class="project-link">
                      Ver más
                    </a>
                  </div>
                </div>
                <div class="project-content">
                  <h3 class="project-title">{{ project.name }}</h3>
                  <p class="project-description">{{ project.description }}</p>
                  <div class="project-tags">
                    <span v-for="tag in project.tags" :key="tag" class="tag">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <button class="carousel-button prev" @click="prevProject" aria-label="Proyecto anterior">
            <ChevronLeft class="carousel-icon" />
          </button>
          <button class="carousel-button next" @click="nextProject" aria-label="Proyecto siguiente">
            <ChevronRight class="carousel-icon" />
          </button>
        </div>

        <!-- Dot Indicators -->
        <div class="carousel-dots">
          <button 
            v-for="(_, index) in projects" 
            :key="index"
            class="dot"
            :class="{ 'active': index === currentProjectIndex }"
            @click="goToProject(index)"
            :aria-label="`Ir al proyecto ${index + 1}`"
          />
        </div>
      </div>
    </LayoutView>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import LayoutView from './LayoutView.vue'

const projectsSliderRef = ref(null)
const currentProjectIndex = ref(0)

const projects = [
  {
    name: 'FlexiTaim',
    description: 'App de turnos con actitud. FlexiTaim automatiza la reserva, los recordatorios y los pagos en un solo lugar. Con notificaciones inteligentes, códigos QR para check-in y un sistema de carrito integrado, es una solución lista para que los negocios gestionen su tiempo sin perder el estilo. Tecnología real, sin complicaciones.',
    image: 'public/flexitaim.png',
    tags: ['Vue', 'Node.js','Firebase','MySQL'],
    link: 'https://flexitaim.com'
  },
  {
    name: 'Guía Digital',
    description: 'Una plataforma pensada para que cualquier negocio pueda mostrar lo que ofrece, sin depender de nadie. Te registrás, cargás tu publicación, subís las fotos, pagás con Mercado Pago y listo: estás online. Rápido, simple y 100% autogestionado. Ideal para promocionar servicios, comercios y pronto también inmuebles. Todo en un solo lugar.',
    image: 'public/guiadigital.png',
    tags: ['Laravel', 'Bootstrap', 'MySQL'],
    link: 'https://guiadigital.com.ar'
  },
  {
    name: 'Apps de catálogos',
    description: 'Sistema de análisis en tiempo real para monitoreo de métricas empresariales con visualización de datos avanzada.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Vue.js', 'Python', 'PostgreSQL'],
    link: '#'
  },
  {
    name: 'Apps de menus',
    description: 'Aplicación completa de reservas para restaurantes con gestión de mesas y notificaciones en tiempo real.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React', 'Node.js', 'Tailwind'],
    link: '#'
  }
]

const nextProject = () => {
  currentProjectIndex.value = (currentProjectIndex.value + 1) % projects.length
}

const prevProject = () => {
  currentProjectIndex.value = (currentProjectIndex.value - 1 + projects.length) % projects.length
}

const goToProject = (index) => {
  currentProjectIndex.value = index
}

const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }, 100)
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  if (projectsSliderRef.value) {
    observer.observe(projectsSliderRef.value)
  }

  return observer
}

let observer = null

onMounted(() => {
  observer = observeElements()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@400..900&display=swap');

.projects {
  padding: 5rem 0;
  background: rgba(245, 245, 245, 0.3);
}

@media (min-width: 640px) {
  .projects {
    padding: 8rem 0;
  }
}

.projects-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

@media (min-width: 640px) {
  .section-title {
    font-size: 2.25rem;
  }
}

@media (min-width: 1024px) {
  .section-title {
    font-size: 3rem;
  }
}

.projects-description {
  font-size: 1.125rem;
  color: #737373;
  max-width: 42rem;
  margin: 0 auto;
}

/* Carousel Container */
.projects-carousel {
  opacity: 0;
  transform: translateY(2rem);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto 3rem;
}

.carousel-track {
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.project-slide {
  display: none;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.project-slide.active {
  display: block;
  opacity: 1;
}

.project-card {
  background: #ffffff;
  border-radius: 1rem;
  border: 1px solid #e5e5e5;
  overflow: hidden;
  height: 100%;
}

.project-image {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 350px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-link {
  padding: 0.75rem 1.5rem;
  background: #0070f3;
  color: #ffffff;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s;
  border: none;
  cursor: pointer;
}

.project-link:hover {
  background: #0051cc;
}

.project-content {
  padding: 2rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #0a0a0a;
}

.project-description {
  font-size: 0.95rem;
  color: #737373;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  background: rgba(0, 112, 243, 0.1);
  color: #0070f3;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Carousel Navigation Buttons */
.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
  z-index: 10;
  color: white;
}

.carousel-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.carousel-button.prev {
  left: -1rem;
}

.carousel-button.next {
  right: -1rem;
}

@media (max-width: 768px) {
  .carousel-button.prev {
    left: 0.5rem;
  }

  .carousel-button.next {
    right: 0.5rem;
  }
}

.carousel-icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Carousel Dots */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: rgba(0, 112, 243, 0.3);
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

.dot.active {
  background: #0070f3;
}

.dot:hover {
  background: rgba(0, 112, 243, 0.6);
}
</style>
