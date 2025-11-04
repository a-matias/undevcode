<template>
  <section id="inicio" class="hero">
    <LayoutView>
      <div class="hero-content">
        <h1 class="hero-title">
          Transformamos ideas en soluciones digitales
        </h1>
        <p class="hero-description">
          Código real para quienes piensan distinto.
        </p>
      </div>
    </LayoutView>
  </section>
</template>

<script setup>
import LayoutView from './LayoutView.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@400..900&display=swap');

.hero {
  padding-top: 8rem;
  padding-bottom: 5rem;
}

@media (min-width: 640px) {
  .hero {
    padding-top: 10rem;
    padding-bottom: 8rem;
  }
}

.hero-content {
  text-align: center;
  max-width: 56rem;
  margin: 0 auto;
}

.hero-title {
  font-family: "Bebas Neue", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  color: #000;
  text-shadow: 0 0 15px rgba(0,0,0,0.1);
  font-size: 2.25rem;
}

@media (min-width: 640px) {
  .hero-title {
    font-size: 3rem;
  }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3.75rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 4.5rem;
  }
}

.hero-description {
  font-family: "Orbitron", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #333;
  font-size: 1.125rem;
  margin-top: 1rem;
}

@media (min-width: 640px) {
  .hero-description {
    font-size: 1.25rem;
  }
}
</style>
