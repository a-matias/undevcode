<template>
  <footer class="footer-wrapper">
    <div class="glow-separator"></div>

    <div class="footer-container">
      
      <div class="footer-cta">
        <span class="cta-label">¿Tenés una idea?</span>
        <a href="https://wa.me/5491170605577" target="_blank" class="cta-title">
          HABLEMOS
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            class="whatsapp-icon"
          >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
        </a>
      </div>

      <div class="footer-grid">
        
        <div class="grid-item brand-box">
          <div class="brand-header">
            <img src="/logo-white.svg" alt="UnDevCode" class="footer-logo" />
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
          <h5 class="box-title">Escribinos</h5>
          
          <form @submit.prevent="submitForm" class="mini-form">
            <div class="input-group">
              <input 
                type="email" 
                v-model="form.email" 
                placeholder="tu@email.com" 
                required 
                class="form-input"
              />
            </div>
            <div class="input-group">
              <textarea 
                v-model="form.message" 
                placeholder="Breve descripción..." 
                rows="2" 
                class="form-input form-textarea"
              ></textarea>
            </div>
            
            <button type="submit" class="submit-btn" :disabled="loading">
              <span v-if="!loading">Enviar Mensaje</span>
              <span v-else>Enviando...</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>

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
import { ref, onMounted, onUnmounted, reactive } from 'vue'

const currentYear = new Date().getFullYear()
const timeString = ref('')
const loading = ref(false)
let timeInterval = null

// Estado del formulario
const form = reactive({
  email: '',
  message: ''
})

// Lógica de envío simulada
const submitForm = async () => {
  loading.value = true
  // Aquí iría tu llamada a la API (ej. Formspree, EmailJS o tu backend)
  console.log('Enviando formulario:', form)
  
  setTimeout(() => {
    loading.value = false
    alert('Mensaje enviado (Simulación)')
    form.email = ''
    form.message = ''
  }, 1500)
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
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Inter:wght@400;600&display=swap');

/* --- ESTRUCTURA GENERAL --- */
.footer-wrapper {
  background-color: #050507; 
  color: #ffffff;
  position: relative;
  width: 100%;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  padding-top: 4rem;
}

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

/* --- 1. CTA SECTION (WHATSAPP) --- */
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
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1.5rem; /* Separación entre texto e ícono */
  transition: all 0.4s ease;
  cursor: pointer;
}

/* Efectos Hover del CTA */
.cta-title:hover {
  background: linear-gradient(90deg, #fff, #25D366); /* Verde WhatsApp */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translateX(10px);
}

.whatsapp-icon {
  width: clamp(40px, 8vw, 80px); /* Ícono responsivo */
  height: clamp(40px, 8vw, 80px);
  color: #fff; /* Por defecto blanco */
  transition: transform 0.4s ease, color 0.4s ease;
  stroke-width: 1.5px;
}

/* Al hacer hover, el ícono recupera su color */
.cta-title:hover .whatsapp-icon {
  color: #25D366; 
  -webkit-text-fill-color: #25D366; /* Reset para evitar que herede el transparente */
  transform: rotate(-15deg) scale(1.1);
}

/* --- 2. GRID LAYOUT --- */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 900px) {
  .footer-grid {
    /* Ajusté el ancho de la última columna para el formulario */
    grid-template-columns: 2fr 1fr 1fr 2fr; 
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
  color: #a1a1aa;
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

/* --- FORMULARIO ESTILO TECH --- */
.mini-form {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background: rgba(255,255,255,0.02);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.05);
}

.form-input {
  width: 100%;
  background: rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #ff00c8;
  background: rgba(255, 0, 200, 0.05);
  box-shadow: 0 0 15px rgba(255, 0, 200, 0.1);
}

.form-textarea {
  resize: none;
}

.submit-btn {
  background: #fff;
  color: #000;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s;
  font-family: 'Space Grotesk', sans-serif;
}

.submit-btn:hover {
  background: #ff00c8;
  color: white;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
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
  font-family: 'Space Grotesk', monospace;
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