<template>
  <section id="nosotros" class="about">
    <LayoutView>
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
    </LayoutView>
  </section>
</template>

<script setup>
import LayoutView from './LayoutView.vue'
</script>

<style scoped>
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
  color: #737373;
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
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid #e5e5e5;
}

.stat-number {
  font-size: 2.25rem;
  font-weight: 700;
  color: #0070f3;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #737373;
}
</style>
