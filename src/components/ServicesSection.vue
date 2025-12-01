<template>
  <section id="servicios" class="services-section" @mousemove="handleMouseMove" ref="sectionRef" v-scroll-reveal>
    <div class="grid-background"></div>
    
    <div class="services-container">
      <div class="services-header">
        <h2 class="section-title">
          <span class="text-gradient">Ingeniería</span> & Soluciones
        </h2>
        <p class="services-description">
          Arquitectura de software de alto rendimiento diseñada para escalar tu negocio sin fricción.
        </p>
      </div>

      <div class="services-grid">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="tech-card"
          ref="cardsRef"
        >
          <div 
            class="spotlight-border"
            :style="{ 
              background: `radial-gradient(500px circle at ${mousePosition.x - service.x}px ${mousePosition.y - service.y}px, rgba(79, 57, 246, 0.4), transparent 40%)` 
            }"
          ></div>

          <div class="card-content">
            <div class="icon-box">
              <component :is="service.icon" :size="28" stroke-width="1.5" />
            </div>
            
            <div class="text-content">
              <h3 class="service-name">{{ service.label }}</h3>
              <p class="service-desc">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { Monitor, Cpu, Layers, Zap, Database, Terminal } from 'lucide-vue-next';

// --- Interfaces ---
interface Service {
  id: number;
  icon: any;
  label: string;
  description: string;
  x: number; // Coordenada X relativa a la sección
  y: number; // Coordenada Y relativa a la sección
}

// --- Estado ---
const sectionRef = ref<HTMLElement | null>(null);
const cardsRef = ref<HTMLElement[]>([]);
const mousePosition = ref({ x: 0, y: 0 });

const services = ref<Service[]>([
  {
    id: 1,
    icon: Monitor,
    label: "Ingeniería Frontend",
    description: "Desarrollo de SPAs reactivas y micro-frontends. Experiencias de usuario fluidas construidas con Vue 3 y React.",
    x: 0, y: 0
  },
  {
    id: 2,
    icon: Database,
    label: "Arquitectura Cloud",
    description: "Infraestructura serverless y kubernetes. Escalabilidad horizontal automática para manejar picos de tráfico.",
    x: 0, y: 0
  },
  {
    id: 3,
    icon: Layers,
    label: "Ecosistemas API",
    description: "Diseño de APIs REST y GraphQL seguras. Integraciones robustas (Stripe, Pasarelas, ERPs) y conectividad total.",
    x: 0, y: 0
  },
  {
    id: 4,
    icon: Terminal,
    label: "DevOps & CI/CD",
    description: "Pipelines automatizados de despliegue. Llevamos tu código del commit a producción en minutos con cero downtime.",
    x: 0, y: 0
  },
  {
    id: 5,
    icon: Cpu,
    label: "Modernización Legacy",
    description: "Refactorización estratégica. Migramos monolitos antiguos a arquitecturas distribuidas modernas y mantenibles.",
    x: 0, y: 0
  },
  {
    id: 6,
    icon: Zap,
    label: "Consultoría IT",
    description: "Auditoría de performance y diagnóstico técnico. Te ayudamos a elegir el stack tecnológico correcto.",
    x: 0, y: 0
  }
]);

// --- Lógica del Spotlight ---
const handleMouseMove = (e: MouseEvent) => {
  if (!sectionRef.value) return;
  
  const rect = sectionRef.value.getBoundingClientRect();
  mousePosition.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
};

const updateCardPositions = () => {
  if (!sectionRef.value || cardsRef.value.length === 0) return;

  const sectionRect = sectionRef.value.getBoundingClientRect();

  // Recalculamos la posición de cada tarjeta relativa a la sección
  // Nota: Vue asigna las refs en un array automáticamente cuando se usa v-for
  // pero el orden no siempre está garantizado, por eso iteramos con cuidado.
  const cardElements = document.querySelectorAll('.tech-card'); // Fallback seguro para orden DOM
  
  cardElements.forEach((el, index) => {
    const rect = el.getBoundingClientRect();
    if (services.value[index]) {
      services.value[index].x = rect.left - sectionRect.left;
      services.value[index].y = rect.top - sectionRect.top;
    }
  });
};

// --- Ciclo de Vida ---
onMounted(async () => {
  await nextTick(); // Esperar a que el DOM se renderice
  updateCardPositions();
  window.addEventListener('resize', updateCardPositions);
  window.addEventListener('scroll', updateCardPositions); // Útil si hay layout shifts
});

onUnmounted(() => {
  window.removeEventListener('resize', updateCardPositions);
  window.removeEventListener('scroll', updateCardPositions);
});
</script>

<style scoped>
/* Fuentes recomendadas para importar en tu index.html o App.vue:
   Inter (Cuerpo) y Space Grotesk (Títulos) 
*/
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;700&display=swap');

.services-section {
  position: relative;
  padding: 6rem 1.5rem;
  background-color: #050505; 
  color: #ffffff;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

@media (min-width: 768px) {
  .services-section {
    padding: 8rem 1.5rem;
  }
}

/* Grilla técnica de fondo */
.grid-background {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
  pointer-events: none;
  z-index: 0;
}

.services-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
}

/* --- Header --- */
.services-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
  line-height: 1.1;
  color: #fff;
}

.text-gradient {
  /* background: linear-gradient(135deg, #4f39f6 0%, #3b82f6 100%); */
  background: linear-gradient(135deg, #FF0000 0%, #FF00C8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-right: 0.1em; /* Evita cortes en la fuente */
}

.services-description {
  color: #a3a3a3;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* --- Grid System --- */
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
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

/* --- Tech Card (Spotlight) --- */
.tech-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02); /* Fondo base muy sutil */
  border-radius: 12px;
  overflow: hidden; /* Mantiene el borde dentro */
  cursor: default;
  height: 100%;
  min-height: 260px; /* Altura mínima consistente */
}

/* Borde brillante (Spotlight) */
.spotlight-border {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 2;
  border-radius: 12px;
  padding: 1.5px; /* Grosor del borde iluminado */
  
  /* Mascara mágica para mostrar solo el borde */
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

/* Mostrar el spotlight cuando el mouse está en la sección */
.services-section:hover .spotlight-border {
  opacity: 1;
}

/* Contenido Interno */
.card-content {
  position: relative;
  height: 100%;
  background: #0a0a0a; /* Color que tapa el interior para dejar solo el borde */
  border: 1px solid rgba(255, 255, 255, 0.06); /* Borde por defecto apagado */
  border-radius: 12px;
  padding: 2rem;
  z-index: 3;
  display: flex;
  flex-direction: column;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.tech-card:hover .card-content {
  background: #0f0f0f; /* Ligero aclarado al hover */
  border-color: rgba(255, 255, 255, 0.1);
}

.icon-box {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.tech-card:hover .icon-box {
  background: rgba(79, 57, 246, 0.15);
  border-color: rgba(79, 57, 246, 0.3);
  color: #818cf8;
}

.text-content {
  flex: 1;
}

.service-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #ededed;
  margin-bottom: 0.75rem;
}

.service-desc {
  font-size: 0.95rem;
  color: #888;
  line-height: 1.6;
}
</style>