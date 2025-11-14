<template>
  <section id="nosotros" class="about">
    <div class="animated-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>
    <div class="about-container">
      <div class="about-grid">
        <div class="about-text">
          <h2 class="section-title">
            SOMOS UNDEVCODE,
          </h2>
          <p class="text-large">
            Un equipo apasionado por transformar ideas en soluciones digitales reales. Creemos en el poder de la tecnología para impulsar negocios y hacer la diferencia.
          </p>
          <p class="text-large">
            Estamos comenzando nuestro camino, pero con la energía y el compromiso de quienes aman lo que hacen. Cada proyecto es una oportunidad para aprender, crecer y entregar valor genuino a nuestros clientes.
          </p>
        </div>
        <div class="services-grid">
          <div 
            v-for="service in services" 
            :key="service.id"
            class="service-card"
            :class="{ 'expanded': activeCard === service.id }"
            @click="toggleCard(service.id)"
          >
            <div class="card-content">
              <component :is="service.icon" class="service-icon" :size="32" :stroke-width="1.5" />
              <div class="service-info">
                <div class="service-label">{{ service.label }}</div>
                <Transition name="smooth-description">
                  <div v-if="activeCard === service.id" class="service-description">
                    <p>{{ service.description }}</p>
                  </div>
                </Transition>
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
import { Monitor, Cloud, Link, BookOpen, Rocket, Lightbulb } from 'lucide-vue-next';

const activeCard = ref(null);

const services = [
  {
    id: 1,
    icon: Monitor,
    label: "Desarrollo Web & Mobile",
    description: "Creamos aplicaciones web modernas y apps móviles nativas que se adaptan perfectamente a las necesidades de tu negocio."
  },
  {
    id: 2,
    icon: Cloud,
    label: "Software SAAS",
    description: "Desarrollamos plataformas cloud escalables con arquitecturas robustas que crecen junto a tu empresa."
  },
  {
    id: 3,
    icon: Link,
    label: "Integraciones",
    description: "Conectamos tus sistemas y herramientas para automatizar procesos y mejorar la eficiencia operativa."
  },
  {
    id: 4,
    icon: BookOpen,
    label: "Capacitaciones",
    description: "Formamos a tu equipo en las mejores prácticas y tecnologías actuales del desarrollo de software."
  },
  {
    id: 5,
    icon: Rocket,
    label: "Modernización",
    description: "Actualizamos sistemas legacy a arquitecturas modernas, mejorando rendimiento y mantenibilidad."
  },
  {
    id: 6,
    icon: Lightbulb,
    label: "Consultoría",
    description: "Asesoramos en estrategia tecnológica y arquitectura de software para tomar las mejores decisiones."
  }
];

const toggleCard = (id) => {
  activeCard.value = activeCard.value === id ? null : id;
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');

.about {
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  padding: 4rem 0;
  width: 100%;
  position: relative;
  overflow: hidden;
}

/* Fondo animado con orbes de gradiente */
.animated-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(25px);
  opacity: 0.6;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

/* <CHANGE> Reducir tamaño de orbes en mobile */
.orb-1 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, rgba(0, 112, 243, 0.3) 0%, rgba(0, 212, 255, 0.2) 100%);
  top: -10%;
  left: -10%;
  animation: float1 20s infinite;
}

.orb-2 {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.25) 0%, rgba(59, 130, 246, 0.2) 100%);
  bottom: -10%;
  right: -10%;
  animation: float2 25s infinite;
}

.orb-3 {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(16, 185, 129, 0.15) 100%);
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float3 30s infinite;
}

/* <CHANGE> Aumentar tamaño de orbes en tablet y desktop */
@media (min-width: 768px) {
  .orb-1 {
    width: 400px;
    height: 400px;
  }

  .orb-2 {
    width: 350px;
    height: 350px;
  }

  .orb-3 {
    width: 300px;
    height: 300px;
  }
}

@media (min-width: 1024px) {
  .orb-1 {
    width: 500px;
    height: 500px;
  }

  .orb-2 {
    width: 400px;
    height: 400px;
  }

  .orb-3 {
    width: 350px;
    height: 350px;
  }
}

@keyframes float1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(100px, -80px) scale(1.1);
  }
  66% {
    transform: translate(-50px, 100px) scale(0.9);
  }
}

@keyframes float2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(-120px, 60px) scale(1.15);
  }
  66% {
    transform: translate(80px, -100px) scale(0.85);
  }
}

@keyframes float3 {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(calc(-50% + 150px), calc(-50% - 100px)) scale(1.2);
  }
}

.about-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

@media (min-width: 640px) {
  .about-container {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .about-container {
    padding: 0 3rem;
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
  font-family: "Bebas Neue", sans-serif;
  font-weight: 500;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: black;
}

@media (min-width: 640px) {
  .section-title {
    font-size: 3.75rem;
  }
}

@media (min-width: 1024px) {
  .section-title {
    font-size: 6rem;
  }
}

.text-large {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  color: #404040;
  line-height: 1.8;
  letter-spacing: -0.01em;
}

.about-text p:first-of-type {
  margin-bottom: 1.5rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 640px) {
  .services-grid {
    gap: 1.25rem;
  }
}

.service-card {
  background: #ffffff;
  padding: 1.75rem 1.25rem;
  border-radius: 1rem;
  border: 1px solid #e5e5e5;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  grid-column: span 1;
  will-change: transform;
}

.service-card:hover:not(.expanded) {
  transform: translateY(-4px);
  border-color: #0070f3;
  box-shadow: 0 12px 24px -10px rgba(0, 112, 243, 0.2);
}

/* <CHANGE> Cambiar animación de expansión - ahora crece suavemente sin cambiar grid-column */
.service-card.expanded {
  background: #ffffff;
  box-shadow: 0 20px 40px -10px rgba(0, 112, 243, 0.15);
  border-color: #0070f3;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* <CHANGE> Nuevo layout para estado expandido - más suave */
.expanded .card-content {
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 0.75rem;
}

.service-icon {
  font-size: 2rem;
  filter: grayscale(0.3);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.service-card:hover:not(.expanded) .service-icon {
  filter: grayscale(0);
  transform: scale(1.1);
}

.expanded .service-icon {
  font-size: 2rem;
  filter: grayscale(0);
}

.service-info {
  flex: 1;
  width: 100%;
}

.service-label {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #404040;
  transition: color 0.3s ease;
}

.service-card:hover:not(.expanded) .service-label {
  color: #0070f3;
}

.expanded .service-label {
  font-size: 1rem;
  color: #0070f3;
  margin-bottom: 0.5rem;
}

@media (min-width: 640px) {
  .service-label {
    font-size: 0.9375rem;
  }
}

/* <CHANGE> Nueva transición suave para la descripción */
.service-description {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transform: translateY(-8px);
}

.expanded .service-description {
  max-height: 15rem;
  opacity: 1;
  transform: translateY(0);
}

.service-description p {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  color: #5e5e5e;
  line-height: 1.6;
  margin: 0;
}

/* <CHANGE> Definir transición suave */
.smooth-description-enter-active,
.smooth-description-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.smooth-description-enter-from {
  opacity: 0;
  transform: translateY(-12px);
}

.smooth-description-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>