<template>
  <nav class="nav" :class="{ scrolled: isScrolled }">
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
          <button 
            class="btn-primary"
            @click.prevent="scrollToSection('footer')"
          >
            Contactar
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="mobile-menu-btn"
          :class="{ active: mobileMenuOpen }"
          aria-label="Toggle menu"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
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
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

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

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

watch(mobileMenuOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
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
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 0, 200, 0.15);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  width: 100%;
}

.nav.scrolled {
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* Mobile: fondo blanco sólido */
@media (max-width: 767px) {
  .nav {
    background: rgb(255, 255, 255);
  }
  
  .nav.scrolled {
    background: rgb(255, 255, 255);
  }
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  transition: padding 0.3s ease;
  width: 100%;
}

.nav.scrolled .nav-container {
  padding: 0 1rem;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  transition: height 0.3s ease;
}

.nav.scrolled .nav-content {
  height: 4rem;
}

/* Mobile: altura reducida */
@media (max-width: 767px) {
  .nav-content {
    height: 3.5rem;
  }
  
  .nav.scrolled .nav-content {
    height: 3.5rem;
  }
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
  transition: all 0.3s ease;
}

.nav.scrolled .logo-img {
  height: 40px;
}

/* Mobile: logo más pequeño */
@media (max-width: 767px) {
  .logo-img {
    height: 32px;
  }
  
  .nav.scrolled .logo-img {
    height: 32px;
  }
}

.logo-img:hover {
  transform: scale(1.05);
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
  padding: 0.5rem 0;
}

.menu-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #FF0000, #FF00C8);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.menu-link:hover {
  color: #FF0000;
}

.menu-link:hover::after {
  width: 100%;
}

.btn-primary {
  font-family: 'Inter', sans-serif;
  padding: 0.625rem 1.75rem;
  background: linear-gradient(135deg, #FF0000 0%, #FF00C8 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 0.938rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 
    0 2px 8px rgba(255, 0, 0, 0.25),
    0 0 0 0 rgba(255, 0, 200, 0.4);
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
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #FF00C8 0%, #FF0000 100%);
  transform: translateY(-2px);
  box-shadow: 
    0 4px 12px rgba(255, 0, 200, 0.4),
    0 0 0 3px rgba(255, 0, 0, 0.15);
}

.btn-primary:active {
  transform: translateY(0px);
  box-shadow: 
    0 2px 6px rgba(255, 0, 0, 0.3),
    0 0 0 2px rgba(255, 0, 200, 0.2);
}

/* ===== BOTÓN HAMBURGER ANIMADO ===== */
.mobile-menu-btn {
  display: block;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 6px;
  position: relative;
  z-index: 51;
}

.mobile-menu-btn:hover {
  background: rgba(255, 0, 200, 0.1);
  transform: scale(1.05);
}

.mobile-menu-btn:active {
  transform: scale(0.95);
}

@media (min-width: 768px) {
  .mobile-menu-btn {
    display: none;
  }
}

/* Hamburger animado - versión mobile más pequeña */
.hamburger-box {
  width: 24px;
  height: 18px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -1.5px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 24px;
  height: 2.5px;
  background: linear-gradient(90deg, #FF0000, #FF00C8);
  border-radius: 2.5px;
  position: absolute;
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
              background 0.3s ease,
              opacity 0.3s ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}

.hamburger-inner::before {
  top: -7px;
  transition: top 0.3s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
              transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
              opacity 0.3s ease;
}

.hamburger-inner::after {
  bottom: -7px;
  transition: bottom 0.3s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
              transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
              opacity 0.3s ease;
}

/* Estado activo (X) */
.mobile-menu-btn.active .hamburger-inner {
  transform: rotate(45deg);
  background: linear-gradient(135deg, #FF0000, #FF00C8);
  transition-delay: 0.3s;
}

.mobile-menu-btn.active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
              opacity 0.3s 0.3s ease;
}

.mobile-menu-btn.active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
              transform 0.3s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

/* Efecto de pulso al abrir */
.mobile-menu-btn.active {
  animation: pulse 0.5s ease;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 0, 200, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(255, 0, 200, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 0, 200, 0);
  }
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

.nav.scrolled ~ .mobile-overlay {
  top: 4rem;
}

/* Mobile: ajustar overlay a nueva altura */
@media (max-width: 767px) {
  .mobile-overlay {
    top: 3.5rem;
  }
  
  .nav.scrolled ~ .mobile-overlay {
    top: 3.5rem;
  }
}

.mobile-menu {
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 0, 200, 0.15);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 45;
}

.nav.scrolled .mobile-menu {
  top: 4rem;
}

/* Mobile: menú ajustado a nueva altura y fondo sólido */
@media (max-width: 767px) {
  .mobile-menu {
    background: rgb(255, 255, 255);
    top: 3.5rem;
  }
  
  .nav.scrolled .mobile-menu {
    top: 3.5rem;
  }
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
  gap: 0.25rem;
  max-width: 1280px;
  margin: 0 auto;
}

.mobile-menu-link {
  font-family: 'Inter', sans-serif;
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a1a1a;
  text-decoration: none;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
  border-radius: 6px;
  letter-spacing: 0.01em;
  position: relative;
  overflow: hidden;
}

.mobile-menu-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: linear-gradient(180deg, #FF0000, #FF00C8);
  transform: scaleY(0);
  transition: transform 0.3s ease;
  border-radius: 0 2px 2px 0;
}

.mobile-menu-link:hover::before {
  transform: scaleY(1);
}

.mobile-menu-link:hover {
  background: rgba(255, 0, 200, 0.08);
  color: #FF0000;
  padding-left: 1.25rem;
}

.btn-full {
  width: 100%;
  margin-top: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
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