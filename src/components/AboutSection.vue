<template>
  <section id="nosotros" class="about-section"  v-scroll-reveal="{ distance: '80px', delay: 400 }">
    <div class="background-effects">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      <div class="noise-overlay"></div>
    </div>

    <div class="content-container">
      <div class="about-content">
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
  </section>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Inter:wght@300;400;500;600&family=Bebas+Neue&display=swap');

/* --- LAYOUT GENERAL --- */
.about-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #ffffff;
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

/* --- CONTENT CENTRADO Y ANCHO --- */
.about-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.brand-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3.5rem, 8vw, 7rem);
  line-height: 0.9;
  color: #171717;
  margin-bottom: 3rem;
  letter-spacing: 2px;
}

.dot {
  color: #0070f3;
}

.text-body {
  font-family: 'Inter', sans-serif;
  color: #525252;
  font-size: 1.125rem;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.highlight-paragraph {
  font-size: 1.5rem;
  color: #171717;
  font-weight: 500;
  padding: 0 2rem;
  position: relative;
}

.highlight-paragraph::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 60%;
  background: #0070f3;
  border-radius: 2px;
}

.text-accent {
  font-weight: 600;
  color: #0070f3;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 6rem;
  border-top: 1px solid #e5e5e5;
  padding-top: 3rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3.5rem;
  color: #171717;
  line-height: 1;
}

.stat-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #737373;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 0.5rem;
}

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  .about-content {
    text-align: left;
  }

  .brand-title {
    font-size: clamp(2.5rem, 10vw, 4rem);
    margin-bottom: 2rem;
  }

  .text-body {
    font-size: 1rem;
  }

  .highlight-paragraph {
    font-size: 1.25rem;
    padding: 0 0 0 1.5rem;
  }

  .stats-row {
    gap: 3rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }
}

</style>