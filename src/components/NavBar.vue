<template>
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
          @click="toggleMobileMenu"
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

    <!-- Mobile Menu with Overlay -->
    <div v-if="mobileMenuOpen" class="mobile-overlay" @click="closeMobileMenu" />
    
    <transition name="slide-down">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <div class="mobile-menu-content">
          <a 
            v-for="item in menuItems" 
            :key="item.id"
            :href="`#${item.id}`"
            @click.prevent="handleMenuClick(item.id)"
            class="mobile-menu-link"
          >
            {{ item.label }}
          </a>
          <button class="btn-primary btn-full">
            Contactar
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'

const mobileMenuOpen = ref(false)

const menuItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'proyectos', label: 'Proyectos' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const handleMenuClick = (id) => {
  scrollToSection(id)
  closeMobileMenu()
}

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

watch(mobileMenuOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})
</script>

<style scoped>
/* Navigation */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e5e5e5;
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
  color: #0a0a0a;
  text-decoration: none;
  transition: color 0.3s;
}

.logo-text:hover {
  color: #0070f3;
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
  color: #737373;
  text-decoration: none;
  transition: color 0.3s;
}

.menu-link:hover {
  color: #0a0a0a;
}

.btn-primary {
  padding: 0.5rem 1.5rem;
  background: #0070f3;
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.btn-primary:hover {
  background: #0051cc;
  transform: translateY(-2px);
}

.mobile-menu-btn {
  display: block;
  padding: 0.5rem;
  background: none;
  border: none;
  color: #0a0a0a;
  cursor: pointer;
  transition: transform 0.3s;
}

.mobile-menu-btn:hover {
  transform: scale(1.1);
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

.mobile-overlay {
  position: fixed;
  top: 5rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 40;
}

.mobile-menu {
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  z-index: 45;
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
  max-width: 1280px;
  margin: 0 auto;
}

.mobile-menu-link {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #737373;
  text-decoration: none;
  padding: 0.75rem 0;
  transition: color 0.3s;
}

.mobile-menu-link:hover {
  color: #0a0a0a;
}

.btn-full {
  width: 100%;
  margin-top: 0.5rem;
}

/* Animación suave para el menú mobile */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
