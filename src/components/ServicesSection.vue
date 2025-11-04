<template>
  <section id="servicios" class="services">
    <LayoutView>
      <div class="services-header">
        <h2 class="section-title">
          Lo que hacemos
        </h2>
        <p class="services-description">
          Ofrecemos servicios integrales de desarrollo de software adaptados a tus necesidades
        </p>
      </div>

      <div class="services-grid">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          :ref="el => { if (el) serviceRefs[index] = el }"
          class="service-card"
        >
          <div class="service-icon">
            <component :is="service.icon" class="icon-svg" />
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
        </div>
      </div>
    </LayoutView>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Code2, Smartphone, Cloud, Database, Palette, Shield } from 'lucide-vue-next'
import LayoutView from './LayoutView.vue'

const serviceRefs = ref([])

const services = [
  {
    icon: Code2,
    title: 'Desarrollo Web',
    description: 'Creamos sitios web modernos y aplicaciones web progresivas con las últimas tecnologías y mejores prácticas.'
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    description: 'Desarrollamos aplicaciones móviles nativas y multiplataforma para iOS y Android con experiencias excepcionales.'
  },
  {
    icon: Cloud,
    title: 'Soluciones Cloud',
    description: 'Implementamos arquitecturas escalables en la nube para garantizar rendimiento y disponibilidad óptimos.'
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description: 'Diseñamos y desarrollamos APIs robustas y sistemas backend eficientes para tus aplicaciones.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creamos interfaces intuitivas y atractivas centradas en la experiencia del usuario y la usabilidad.'
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Implementamos las mejores prácticas de seguridad para proteger tus datos y aplicaciones.'
  }
]

const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }, index * 100)
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  serviceRefs.value.forEach((ref) => {
    if (ref) observer.observe(ref)
  })

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
.services {
  padding: 5rem 0;
}

@media (min-width: 640px) {
  .services {
    padding: 8rem 0;
  }
}

.services-header {
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

.services-description {
  font-size: 1.125rem;
  color: #737373;
  max-width: 42rem;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

.service-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e5e5e5;
  opacity: 0;
  transform: translateY(2rem);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out, border-color 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  border-color: rgba(0, 112, 243, 0.5);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 3rem;
  height: 3rem;
  background: rgba(0, 112, 243, 0.1);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.icon-svg {
  width: 1.5rem;
  height: 1.5rem;
  color: #0070f3;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.service-description {
  color: #737373;
  line-height: 1.75;
}
</style>
