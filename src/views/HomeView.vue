<template>
  <div class="app">
    <!-- Fixed Navigation -->
    <nav class="nav">
      <div class="nav-container">
        <div class="nav-content">
          <!-- Logo -->
          <div class="logo">
            <a href="#inicio" class="logo-text">
              UnDevCode
            </a>
          </div>
          
          <!-- Desktop Menu -->
          <div class="desktop-menu">
            <a 
              v-for="item in menuItems" 
              :key="item.id"
              :href="`#${item.id}`"
              @click.prevent="scrollToSection(item.id)"
              class="menu-link"
            >
              {{ item.label }}
            </a>
            <button class="btn-primary">
              Contactar
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="mobile-menu-btn"
          >
            <svg v-if="!mobileMenuOpen" class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <div class="mobile-menu-content">
          <a 
            v-for="item in menuItems" 
            :key="item.id"
            :href="`#${item.id}`"
            @click.prevent="scrollToSection(item.id); mobileMenuOpen = false"
            class="mobile-menu-link"
          >
            {{ item.label }}
          </a>
          <button class="btn-primary btn-full">
            Contactar
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="inicio" class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="badge">
            <span class="badge-text">
              Innovación Digital
            </span>
          </div>
          <h1 class="hero-title">
            Transformamos ideas en soluciones digitales
          </h1>
          <p class="hero-description">
            Desarrollamos software innovador que impulsa el crecimiento de tu negocio con tecnología de vanguardia
          </p>
          <button class="btn-primary btn-cta">
            Comenzar proyecto
          </button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="nosotros" class="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <h2 class="section-title">
              Quiénes somos
            </h2>
            <p class="text-large">
              Somos una agencia de desarrollo de software especializada en crear experiencias digitales excepcionales. Nuestro equipo combina creatividad, tecnología y estrategia para entregar soluciones que superan expectativas.
            </p>
            <p class="text-large">
              Con años de experiencia en la industria, hemos ayudado a empresas de todos los tamaños a alcanzar sus objetivos digitales mediante desarrollo web, aplicaciones móviles y soluciones empresariales personalizadas.
            </p>
          </div>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number">150+</div>
              <div class="stat-label">Proyectos completados</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">98%</div>
              <div class="stat-label">Satisfacción del cliente</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">50+</div>
              <div class="stat-label">Clientes activos</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Soporte técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="servicios" class="services">
      <div class="container">
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
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <h3 class="footer-brand">DevStudio</h3>
            <p class="footer-text">
              Transformando el futuro digital con soluciones innovadoras de software
            </p>
          </div>
          <div>
            <h4 class="footer-heading">Servicios</h4>
            <ul class="footer-list">
              <li><a href="#" class="footer-link">Desarrollo Web</a></li>
              <li><a href="#" class="footer-link">Apps Móviles</a></li>
              <li><a href="#" class="footer-link">Consultoría</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer-heading">Empresa</h4>
            <ul class="footer-list">
              <li><a href="#nosotros" class="footer-link">Sobre nosotros</a></li>
              <li><a href="#" class="footer-link">Equipo</a></li>
              <li><a href="#" class="footer-link">Carreras</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer-heading">Contacto</h4>
            <ul class="footer-list">
              <li>info@devstudio.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 UnDevCode. Todos los derechos reservados.</p>
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
* {
  box-sizing: border-box;
}

/* Variables */
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --muted: #f5f5f5;
  --muted-foreground: #737373;
  --border: #e5e5e5;
  --primary: #0070f3;
  --primary-foreground: #ffffff;
  --accent: #f5f5f5;
  --accent-foreground: #0a0a0a;
}

.app {
  min-height: 100vh;
  background: var(--background);
  color: var(--foreground);
}

/* Navigation */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
}

.logo {
  flex-shrink: 0;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--foreground);
  text-decoration: none;
}

.desktop-menu {
  display: none;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 768px) {
  .desktop-menu {
    display: flex;
  }
}

.menu-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--muted-foreground);
  text-decoration: none;
  transition: color 0.3s;
}

.menu-link:hover {
  color: var(--foreground);
}

.btn-primary {
  padding: 0.5rem 1.5rem;
  background: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-primary:hover {
  background: #0051cc;
}

.mobile-menu-btn {
  display: block;
  padding: 0.5rem;
  background: none;
  border: none;
  color: var(--foreground);
  cursor: pointer;
}

@media (min-width: 768px) {
  .mobile-menu-btn {
    display: none;
  }
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
}

.mobile-menu {
  border-top: 1px solid var(--border);
  background: var(--background);
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
}

.mobile-menu-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mobile-menu-link {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--muted-foreground);
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.3s;
}

.mobile-menu-link:hover {
  color: var(--foreground);
}

.btn-full {
  width: 100%;
}

/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

/* Hero Section */
.hero {
  padding-top: 8rem;
  padding-bottom: 5rem;
}

@media (min-width: 640px) {
  .hero {
    padding-top: 10rem;
    padding-bottom: 8rem;
  }
}

.hero-content {
  text-align: center;
  max-width: 56rem;
  margin: 0 auto;
}

.badge {
  display: inline-block;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  background: rgba(245, 245, 245, 0.5);
  border-radius: 9999px;
}

.badge-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--accent-foreground);
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

@media (min-width: 640px) {
  .hero-title {
    font-size: 3rem;
  }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3.75rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 4.5rem;
  }
  
  .logo-text {
    font-size: 1.5rem;
  }
}

.hero-description {
  font-size: 1.125rem;
  color: var(--muted-foreground);
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.75;
}

@media (min-width: 640px) {
  .hero-description {
    font-size: 1.25rem;
  }
}

.btn-cta {
  padding: 1rem 2rem;
  font-size: 1rem;
  transition: all 0.3s;
}

.btn-cta:hover {
  transform: scale(1.05);
}

/* About Section */
.about {
  padding: 5rem 0;
  background: rgba(245, 245, 245, 0.3);
}

@media (min-width: 640px) {
  .about {
    padding: 8rem 0;
  }
}

.about-grid {
  display: grid;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
}

@media (min-width: 1024px) {
  .about-grid {
    gap: 5rem;
  }
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

.text-large {
  font-size: 1.125rem;
  color: var(--muted-foreground);
  line-height: 1.75;
}

.about-text p:first-of-type {
  margin-bottom: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.stat-card {
  background: var(--background);
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
}

.stat-number {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--muted-foreground);
}

/* Services Section */
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

.services-description {
  font-size: 1.125rem;
  color: var(--muted-foreground);
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
  background: var(--background);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
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
  color: var(--primary);
}

.service-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.service-description {
  color: var(--muted-foreground);
  line-height: 1.75;
}

/* Footer */
.footer {
  background: rgba(245, 245, 245, 0.3);
  border-top: 1px solid var(--border);
  padding: 3rem 1rem;
}

@media (min-width: 640px) {
  .footer {
    padding: 3rem 1.5rem;
  }
}

@media (min-width: 1024px) {
  .footer {
    padding: 3rem 2rem;
  }
}

.footer-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer-brand {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer-text {
  font-size: 0.875rem;
  color: var(--muted-foreground);
  line-height: 1.75;
}

.footer-heading {
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-list li {
  font-size: 0.875rem;
  color: var(--muted-foreground);
}

.footer-link {
  color: var(--muted-foreground);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: var(--foreground);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  text-align: center;
  font-size: 0.875rem;
  color: var(--muted-foreground);
}
</style>