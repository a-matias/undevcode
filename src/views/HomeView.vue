<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main><template>
  <div class="min-h-screen bg-background text-foreground">
     Fixed Navigation 
    <nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
           Logo 
          <div class="flex-shrink-0">
            <a href="#inicio" class="text-xl sm:text-2xl font-bold text-foreground">
              DevStudio
            </a>
          </div>
          
           Desktop Menu 
          <div class="hidden md:flex items-center gap-8">
            <a 
              v-for="item in menuItems" 
              :key="item.id"
              :href="`#${item.id}`"
              @click.prevent="scrollToSection(item.id)"
              class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {{ item.label }}
            </a>
            <button class="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
              Contactar
            </button>
          </div>

           Mobile Menu Button 
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 text-foreground"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

       Mobile Menu 
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-border bg-background">
        <div class="px-4 py-4 space-y-3">
          <a 
            v-for="item in menuItems" 
            :key="item.id"
            :href="`#${item.id}`"
            @click.prevent="scrollToSection(item.id); mobileMenuOpen = false"
            class="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            {{ item.label }}
          </a>
          <button class="w-full px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
            Contactar
          </button>
        </div>
      </div>
    </nav>

     Hero Section 
    <section id="inicio" class="pt-32 pb-20 sm:pt-40 sm:pb-32 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-block mb-6 px-4 py-2 bg-accent/50 rounded-full">
            <span class="text-sm font-medium text-accent-foreground">
              Innovación Digital
            </span>
          </div>
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Transformamos ideas en soluciones digitales
          </h1>
          <p class="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Desarrollamos software innovador que impulsa el crecimiento de tu negocio con tecnología de vanguardia
          </p>
          <button class="px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-medium hover:bg-primary/90 transition-all hover:scale-105">
            Comenzar proyecto
          </button>
        </div>
      </div>
    </section>

     About Section 
    <section id="nosotros" class="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Quiénes somos
            </h2>
            <p class="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos una agencia de desarrollo de software especializada en crear experiencias digitales excepcionales. Nuestro equipo combina creatividad, tecnología y estrategia para entregar soluciones que superan expectativas.
            </p>
            <p class="text-lg text-muted-foreground leading-relaxed">
              Con años de experiencia en la industria, hemos ayudado a empresas de todos los tamaños a alcanzar sus objetivos digitales mediante desarrollo web, aplicaciones móviles y soluciones empresariales personalizadas.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-background p-6 rounded-2xl border border-border">
              <div class="text-4xl font-bold text-primary mb-2">150+</div>
              <div class="text-sm text-muted-foreground">Proyectos completados</div>
            </div>
            <div class="bg-background p-6 rounded-2xl border border-border">
              <div class="text-4xl font-bold text-primary mb-2">98%</div>
              <div class="text-sm text-muted-foreground">Satisfacción del cliente</div>
            </div>
            <div class="bg-background p-6 rounded-2xl border border-border">
              <div class="text-4xl font-bold text-primary mb-2">50+</div>
              <div class="text-sm text-muted-foreground">Clientes activos</div>
            </div>
            <div class="bg-background p-6 rounded-2xl border border-border">
              <div class="text-4xl font-bold text-primary mb-2">24/7</div>
              <div class="text-sm text-muted-foreground">Soporte técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>

     Services Section 
    <section id="servicios" class="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Lo que hacemos
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos servicios integrales de desarrollo de software adaptados a tus necesidades
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            :ref="el => { if (el) serviceRefs[index] = el }"
            class="service-card bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg opacity-0 translate-y-8"
          >
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <component :is="service.icon" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>
            <p class="text-muted-foreground leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

     Footer 
    <footer class="bg-muted/30 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="text-xl font-bold mb-4">DevStudio</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">
              Transformando el futuro digital con soluciones innovadoras de software
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Servicios</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" class="hover:text-foreground transition-colors">Desarrollo Web</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Apps Móviles</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Consultoría</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Empresa</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><a href="#nosotros" class="hover:text-foreground transition-colors">Sobre nosotros</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Equipo</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Carreras</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Contacto</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li>info@devstudio.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>
        <div class="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 DevStudio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Code2, Smartphone, Cloud, Database, Palette, Shield } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)
const serviceRefs = ref([])

const menuItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'servicios', label: 'Servicios' }
]

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

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const observeServices = () => {
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
  observer = observeServices()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.service-card {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out, border-color 0.3s ease, box-shadow 0.3s ease;
}
</style>
</template>
