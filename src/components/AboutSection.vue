<template>
  <section id="nosotros" class="about-section">
    <div class="background-effects">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      <div class="noise-overlay"></div>
    </div>

    <div class="content-container">
      <div class="layout-grid">
        
        <div class="text-column">
          <div class="sticky-wrapper">
            <h2 class="brand-title">
              SOMOS UNDEVCODE
              <span class="dot">.</span>
            </h2>
            
            <div class="text-body">
              <p class="highlight-paragraph">
                Transformamos complejidad en experiencias digitales fluidas.
              </p>
              <p>
                No somos solo desarrolladores; somos arquitectos digitales. Creemos que el código es el lenguaje del futuro y lo hablamos con fluidez para impulsar negocios que buscan liderar su industria.
              </p>
              <p>
                Cada línea de código que escribimos tiene un propósito: 
                <span class="text-accent">Escalar, Optimizar e Impactar.</span>
              </p>
            </div>

            <div class="stats-row">
              <div class="stat-item">
                <span class="stat-number">+15</span>
                <span class="stat-label">Proyectos</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">100%</span>
                <span class="stat-label">Compromiso</span>
              </div>
            </div>
          </div>
        </div>

        <div class="services-grid">
          <div 
            v-for="service in services" 
            :key="service.id"
            class="bento-card"
            :class="{ 'is-active': activeCard === service.id }"
            @click="toggleCard(service.id)"
            @mouseenter="hoverCard(service.id)"
            @mouseleave="leaveCard"
          >
            <div class="card-glow"></div>
            
            <div class="card-inner">
              <div class="icon-wrapper">
                <component :is="service.icon" :stroke-width="1.5" />
              </div>
              
              <div class="content-wrapper">
                <h3 class="service-title">{{ service.label }}</h3>
                <div class="service-details">
                  <p>{{ service.description }}</p>
                </div>
              </div>

              <div class="interaction-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Monitor, Cpu, Layers, Zap, Database, Terminal } from 'lucide-vue-next';

const activeCard = ref(null);
let hoverTimeout = null;

// Lógica de interacción híbrida (Click funciona siempre, Hover opcional)
const toggleCard = (id) => {
  activeCard.value = activeCard.value === id ? null : id;
};

// Opcional: Si quieres que se abra al pasar el mouse (descomenta para activar)
const hoverCard = (id) => {
  // if (window.innerWidth > 1024) activeCard.value = id; 
};

const leaveCard = () => {
  // if (window.innerWidth > 1024) activeCard.value = null;
};

// Datos mejorados para sonar "High-End"
const services = [
  {
    id: 1,
    icon: Monitor, // Antes Monitor
    label: "Ingeniería Web",
    description: "Desarrollo de ecosistemas digitales completos. Desde SPAs reactivas hasta portales corporativos de alto tráfico."
  },
  {
    id: 2,
    icon: Database, // Antes Cloud
    label: "Arquitectura SaaS",
    description: "Diseñamos la infraestructura escalable que tu producto necesita para crecer de 10 a 10.000 usuarios sin fricción."
  },
  {
    id: 3,
    icon: Layers, // Antes Link
    label: "Ecosistemas API",
    description: "Conectamos tu negocio al mundo. Integraciones robustas (Stripe, AFIP, Maps) y desarrollo de APIs RESTful seguras."
  },
  {
    id: 4,
    icon: Terminal, // Antes BookOpen
    label: "Mentoria Técnica",
    description: "Potenciamos equipos in-house. Transferencia de conocimiento, code reviews y estandarización de buenas prácticas."
  },
  {
    id: 5,
    icon: Cpu, // Antes Rocket
    label: "Refactor & Scale",
    description: "Modernización de sistemas legacy. Migramos tu código antiguo a tecnologías modernas (Vue 3, React, Node) optimizando rendimiento."
  },
  {
    id: 6,
    icon: Zap, // Antes Lightbulb
    label: "Consultoría IT",
    description: "Diagnóstico estratégico. Te ayudamos a elegir el stack tecnológico correcto para evitar deuda técnica futura."
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500&display=swap');

/* --- LAYOUT GENERAL --- */
.about-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #ffffff; /* Fondo base limpio */
  overflow: hidden;
  padding: 6rem 0;
  display: flex;
  align-items: center;
}

.content-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;
}

/* --- BACKGROUND FX --- */
.background-effects {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.noise-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 20s infinite ease-in-out;
}

.orb-1 { width: 500px; height: 500px; background: rgba(0, 112, 243, 0.15); top: -10%; left: -10%; }
.orb-2 { width: 400px; height: 400px; background: rgba(255, 0, 200, 0.1); bottom: -10%; right: -5%; animation-delay: -5s; }
.orb-3 { width: 300px; height: 300px; background: rgba(16, 185, 129, 0.1); top: 40%; left: 40%; animation-delay: -10s; }

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -50px); }
}

/* --- GRID LAYOUT --- */
.layout-grid {
  display: grid;
  gap: 4rem;
}

@media (min-width: 1024px) {
  .layout-grid {
    grid-template-columns: 0.8fr 1.2fr; /* Texto más angosto, grid más ancho */
    gap: 6rem;
    align-items: start;
  }
}

/* --- LEFT COLUMN: TEXT --- */
.sticky-wrapper {
  position: sticky;
  top: 8rem; /* Se queda fijo al scrollear en desktop */
}

.brand-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3.5rem, 6vw, 5.5rem);
  line-height: 0.9;
  color: #171717;
  margin-bottom: 2rem;
  letter-spacing: 1px;
}

.dot {
  color: #0070f3;
}

.text-body {
  font-family: 'Inter', sans-serif;
  color: #525252;
  font-size: 1.05rem;
  line-height: 1.7;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.highlight-paragraph {
  font-size: 1.25rem;
  color: #171717;
  font-weight: 500;
  border-left: 3px solid #0070f3;
  padding-left: 1rem;
}

.text-accent {
  font-weight: 600;
  color: #0070f3;
}

.stats-row {
  margin-top: 3rem;
  display: flex;
  gap: 3rem;
  border-top: 1px solid #e5e5e5;
  padding-top: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.5rem;
  color: #171717;
}

.stat-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #737373;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* --- RIGHT COLUMN: BENTO GRID --- */
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* --- MAGIC CARD STYLES --- */
.bento-card {
  position: relative;
  background: rgba(255, 255, 255, 0.7); /* Glass effect */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 180px; /* Altura base */
}

.bento-card:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-4px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
}

/* Estado Activo (Expandido) */
.bento-card.is-active {
  background: #ffffff;
  height: 280px; /* Crece verticalmente */
  box-shadow: 0 20px 40px rgba(0, 112, 243, 0.15);
}

/* Borde brillante animado */
.card-glow {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 2px; /* Grosor del borde */
  background: linear-gradient(135deg, #0070f3, #FF00C8);
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.bento-card.is-active .card-glow {
  opacity: 1;
}

.card-inner {
  position: relative;
  z-index: 2;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

/* Icono */
.icon-wrapper {
  width: 48px;
  height: 48px;
  background: #f5f5f5;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #404040;
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;
}

.icon-wrapper svg {
  width: 24px;
  height: 24px;
}

.bento-card:hover .icon-wrapper {
  background: #0070f3;
  color: white;
  transform: scale(1.1) rotate(-5deg);
}

.bento-card.is-active .icon-wrapper {
  background: #0070f3;
  color: white;
}

/* Contenido */
.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.service-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #171717;
  margin-bottom: 0.5rem;
}

.service-details {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #737373;
  line-height: 1.5;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s ease 0.1s; /* Delay para que se vea suave */
}

/* Revelar texto solo al activar */
.bento-card.is-active .service-details {
  opacity: 1;
  transform: translateY(0);
}

/* Icono + / - */
.interaction-icon {
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: #a3a3a3;
  transition: transform 0.4s ease;
}

.bento-card.is-active .interaction-icon {
  transform: rotate(45deg); /* Se convierte en X */
  color: #0070f3;
}
</style>