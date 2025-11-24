<template>
  <footer class="footer-wrapper">
    <div class="glow-separator"></div>

    <div class="footer-container">
      
      <div class="footer-cta">
        <span class="cta-label">¿Tenés una idea?</span>
        <a href="mailto:contacto@undevcode.com" class="cta-title">
          HABLEMOS
          <span class="arrow-icon">↗</span>
        </a>
      </div>

      <div class="footer-grid">
        
        <div class="grid-item brand-box">
          <div class="brand-header">
            <img src="/logo.svg" alt="UnDevCode" class="footer-logo" />
            <div class="status-badge">
              <span class="status-dot"></span>
              Disponible para proyectos
            </div>
          </div>
          <p class="brand-desc">
            Ingeniería de software de precisión para escalar negocios digitales.
            Desde Buenos Aires para el mundo.
          </p>
        </div>

        <div class="grid-item nav-box">
          <h5 class="box-title">Explorar</h5>
          <nav class="footer-nav">
            <a href="#inicio" class="nav-link">Inicio</a>
            <a href="#nosotros" class="nav-link">Nosotros</a>
            <a href="#proyectos" class="nav-link">Proyectos</a>
            <a href="#" class="nav-link">Carreras</a>
          </nav>
        </div>

        <div class="grid-item services-box">
          <h5 class="box-title">Expertise</h5>
          <ul class="tech-list">
            <li>Desarrollo Web Full Stack</li>
            <li>Arquitectura Cloud</li>
            <li>Aplicaciones Móviles</li>
            <li>Consultoría UI/UX</li>
          </ul>
        </div>

        <div class="grid-item contact-box">
          <h5 class="box-title">Conectar</h5>
          
          <button @click="copyEmail" class="copy-email-btn" :class="{ 'copied': emailCopied }">
            <span class="email-text">contacto@undevcode.com</span>
            <span class="copy-icon">
              {{ emailCopied ? 'Copiado!' : 'Copiar' }}
            </span>
          </button>

          <div class="social-links">
            <a href="#" class="social-pill">LinkedIn</a>
            <a href="#" class="social-pill">Instagram</a>
            <a href="#" class="social-pill">GitHub</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="legal">
          <span>&copy; {{ currentYear }} UnDevCode Labs.</span>
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
        </div>
        
        <div class="tech-info">
          <span class="location">BUE, AR</span>
          <span class="live-time">{{ timeString }}</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentYear = new Date().getFullYear()
const emailCopied = ref(false)
const timeString = ref('')
let timeInterval = null

// Función para copiar email
const copyEmail = () => {
  navigator.clipboard.writeText('info@undevcode.com')
  emailCopied.value = true
  setTimeout(() => {
    emailCopied.value = false
  }, 2000)
}

// Función para el reloj en vivo (Zona horaria Argentina)
const updateTime = () => {
  const options = { 
    timeZone: 'America/Argentina/Buenos_Aires',
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: false 
  }
  timeString.value = new Date().toLocaleTimeString('es-AR', options)
}

onMounted(() => {
  updateTime()
  timeInterval = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timeInterval) clearInterval(timeInterval)
})
</script>

<style scoped>
/* Importamos fuentes modernas */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Inter:wght@400;600&display=swap');

/* --- VARIABLES --- */
.footer-wrapper {
  /* Fondo oscuro para continuidad con tu Hero */
  background-color: #050507; 
  color: #ffffff;
  position: relative;
  width: 100%;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  padding-top: 4rem;
}

/* --- SEPARADOR GLOW --- */
.glow-separator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 0, 200, 0.5), transparent);
  box-shadow: 0 0 20px rgba(255, 0, 200, 0.3);
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* --- 1. CTA SECTION --- */
.footer-cta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 3rem;
}

.cta-label {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  color: #a1a1aa;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.cta-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3rem, 10vw, 8rem); /* Texto responsivo gigante */
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.4s ease;
  cursor: pointer;
}

.cta-title:hover {
  /* Efecto gradiente en texto */
  background: linear-gradient(90deg, #fff, #ff00c8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translateX(10px);
}

.arrow-icon {
  font-size: 0.5em;
  opacity: 0.5;
  transition: transform 0.4s ease;
}

.cta-title:hover .arrow-icon {
  transform: translate(10px, -10px);
  opacity: 1;
  color: #ff00c8;
  -webkit-text-fill-color: #ff00c8; /* Reset para el icono */
}

/* --- 2. BENTO GRID --- */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr 1.5fr; /* Layout asimétrico moderno */
  }
}

.grid-item {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.box-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
  color: #71717a;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Brand Box */
.footer-logo {
  height: 32px;
  width: auto;
  filter: brightness(100); /* Logo blanco */
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 20px;
  font-size: 0.75rem;
  color: #34d399;
}

.status-dot {
  width: 6px;
  height: 6px;
  background-color: #34d399;
  border-radius: 50%;
  box-shadow: 0 0 8px #34d399;
  animation: pulse 2s infinite;
}

.brand-desc {
  font-size: 0.95rem;
  color: #a1a1aa;
  line-height: 1.6;
  max-width: 300px;
}

/* Navegación */
.footer-nav, .tech-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.nav-link, .tech-list li {
  color: #e4e4e7;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
  position: relative;
  width: fit-content;
}

.tech-list li {
  color: #a1a1aa; /* Un poco más apagado para ítems no clickeables */
}

.nav-link:hover {
  color: #ff00c8;
}

.nav-link::before {
  content: '';
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 4px;
  background-color: #ff00c8;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.2s;
}

.nav-link:hover::before {
  opacity: 1;
}

/* Contacto Interactivo */
.copy-email-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  font-family: 'Space Grotesk', monospace;
  width: 100%;
}

.copy-email-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.copy-email-btn.copied {
  background: rgba(16, 185, 129, 0.1);
  border-color: #34d399;
  color: #34d399;
}

.copy-icon {
  font-size: 0.75rem;
  text-transform: uppercase;
  opacity: 0.7;
}

.social-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.social-pill {
  padding: 0.4rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: #fff;
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.3s;
}

.social-pill:hover {
  background: #fff;
  color: #000;
  transform: translateY(-2px);
}

/* --- 3. BOTTOM INFO --- */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.85rem;
  color: #71717a;
}

@media (min-width: 640px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.legal {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.legal a {
  color: #71717a;
  text-decoration: none;
  transition: color 0.2s;
}

.legal a:hover {
  color: #fff;
}

.tech-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'Space Grotesk', monospace; /* Look técnico */
  background: rgba(0,0,0,0.3);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.05);
}

.location {
  color: #a1a1aa;
}

.live-time {
  color: #fff;
  font-weight: 700;
}

/* Animaciones */
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4); }
  70% { box-shadow: 0 0 0 6px rgba(52, 211, 153, 0); }
  100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
}
</style>