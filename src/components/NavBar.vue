<template>
  <nav class="nav">
    <div class="nav-container">
      <div class="nav-content">
        <!-- Logo -->
        <div class="logo">
          <a href="#inicio" class="logo-link">
            <img src="/logo.svg" alt="UnDevCode Logo" class="logo-img" />
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
  // { id: 'servicios', label: 'Servicios' },
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

/* Navigation */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.90);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(74, 194, 154, 0.2);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
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

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-img {
  height: 50px;
  width: auto;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.1);
  filter: brightness(1.1);
}

.desktop-menu {
  display: none;
  align-items: center;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .desktop-menu {
    display: flex;
  }
}

.menu-link {
  font-family: 'Inter', sans-serif;
  font-size: 0.938rem;
  font-weight: 600;
  color: #1a1a1a;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  letter-spacing: 0.01em;
}

.menu-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #4AC29A, #2d7a5f);
  transition: width 0.3s ease;
}

.menu-link:hover {
  color: #4AC29A;
}

.menu-link:hover::after {
  width: 100%;
}

.btn-primary {
  font-family: 'Inter', sans-serif;
  padding: 0.625rem 1.75rem;
  background: linear-gradient(135deg, #4AC29A 0%, #3aa881 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 0.938rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 
    0 2px 8px rgba(74, 194, 154, 0.25),
    0 0 0 0 rgba(74, 194, 154, 0.4);
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #3aa881 0%, #2d7a5f 100%);
  transform: translateY(-2px);
  box-shadow: 
    0 4px 12px rgba(74, 194, 154, 0.35),
    0 0 0 3px rgba(74, 194, 154, 0.15);
}

.btn-primary:active {
  transform: translateY(0px);
  box-shadow: 
    0 2px 6px rgba(74, 194, 154, 0.3),
    0 0 0 2px rgba(74, 194, 154, 0.2);
}

.mobile-menu-btn {
  display: block;
  padding: 0.5rem;
  background: none;
  border: none;
  color: #1a1a1a;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 6px;
}

.mobile-menu-btn:hover {
  background: rgba(74, 194, 154, 0.1);
  transform: scale(1.05);
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
  background: rgba(0, 0, 0, 0.4);
  z-index: 40;
  backdrop-filter: blur(2px);
}

.mobile-menu {
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.90);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(74, 194, 154, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 45;
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
}

.mobile-menu-content {
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 1280px;
  margin: 0 auto;
}

.mobile-menu-link {
  font-family: 'Inter', sans-serif;
  display: block;
  font-size: 0.938rem;
  font-weight: 600;
  color: #1a1a1a;
  text-decoration: none;
  padding: 0.875rem 1rem;
  transition: all 0.3s ease;
  border-radius: 8px;
  letter-spacing: 0.01em;
}

.mobile-menu-link:hover {
  background: rgba(74, 194, 154, 0.1);
  color: #4AC29A;
  transform: translateX(4px);
}

.btn-full {
  width: 100%;
  margin-top: 1rem;
  padding: 0.875rem 1.75rem;
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