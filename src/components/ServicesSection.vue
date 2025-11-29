<template>
  <section id="servicios" class="services">
    <div class="services-container">
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
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Monitor, Cpu, Layers, Zap, Database, Terminal } from 'lucide-vue-next';

const activeCard = ref(null);

const toggleCard = (id) => {
  activeCard.value = activeCard.value === id ? null : id;
};

const hoverCard = (id) => {
  // Opcional: descomentar para activar hover en desktop
  // if (window.innerWidth > 1024) activeCard.value = id; 
};

const leaveCard = () => {
  // if (window.innerWidth > 1024) activeCard.value = null;
};

const services = [
  {
    id: 1,
    icon: Monitor,
    label: "Ingeniería Web",
    description: "Desarrollo de ecosistemas digitales completos. Desde SPAs reactivas hasta portales corporativos de alto tráfico."
  },
  {
    id: 2,
    icon: Database,
    label: "Arquitectura SaaS",
    description: "Diseñamos la infraestructura escalable que tu producto necesita para crecer de 10 a 10.000 usuarios sin fricción."
  },
  {
    id: 3,
    icon: Layers,
    label: "Ecosistemas API",
    description: "Conectamos tu negocio al mundo. Integraciones robustas (Stripe, AFIP, Maps) y desarrollo de APIs RESTful seguras."
  },
  {
    id: 4,
    icon: Terminal,
    label: "Mentoría Técnica",
    description: "Potenciamos equipos in-house. Transferencia de conocimiento, code reviews y estandarización de buenas prácticas."
  },
  {
    id: 5,
    icon: Cpu,
    label: "Refactor & Scale",
    description: "Modernización de sistemas legacy. Migramos tu código antiguo a tecnologías modernas (Vue 3, React, Node) optimizando rendimiento."
  },
  {
    id: 6,
    icon: Zap,
    label: "Consultoría IT",
    description: "Diagnóstico estratégico. Te ayudamos a elegir el stack tecnológico correcto para evitar deuda técnica futura."
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500&display=swap');

.services {
  padding: 5rem 0;
  background: #FAFAFA;
  background: linear-gradient(180deg, rgba(250, 250, 250, 1) 0%, rgba(255, 255, 255, 1) 100%);
}

@media (min-width: 640px) {
  .services {
    padding: 8rem 0;
  }
}

.services-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
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

/* --- SERVICES GRID --- */
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

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

/* --- MAGIC CARD STYLES --- */
.bento-card {
  position: relative;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 180px;
}

.bento-card:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-4px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
}

.bento-card.is-active {
  background: #ffffff;
  height: 280px;
  box-shadow: 0 20px 40px rgba(0, 112, 243, 0.15);
}

.card-glow {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 2px;
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
  transition: all 0.4s ease 0.1s;
}

.bento-card.is-active .service-details {
  opacity: 1;
  transform: translateY(0);
}

.interaction-icon {
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: #a3a3a3;
  transition: transform 0.4s ease;
}

.bento-card.is-active .interaction-icon {
  transform: rotate(45deg);
  color: #0070f3;
}
</style>