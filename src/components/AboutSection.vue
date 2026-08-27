<template>
  <section id="nosotros" class="about-section" v-scroll-reveal="{ distance: '80px', delay: 400 }">
    <!-- Fondo visual innovador con Grid + Orbes luminosos -->
    <div class="background-effects">
      <div class="tech-grid"></div>
      <div class="orb orb-primary"></div>
      <div class="orb orb-accent"></div>
      <div class="orb orb-glow"></div>
      <div class="noise-overlay"></div>
    </div>

    <div class="content-container">
      <div class="about-content">
        <!-- Título conservado en Bebas Neue -->
        <h2 class="brand-title">
          SOMOS UNDEVCODE
          <span class="dot">.</span>
        </h2>
        
        <div class="text-body">
          <p class="highlight-paragraph">
            Donde las ideas se convierten en soluciones digitales.
          </p>
          <p>
            En <span class="brand-inline">UNDEVCODE</span> desarrollamos software de nivel empresarial, plataformas SaaS escalables y sitios web optimizados estratégicamente para dominar en motores de búsqueda. Fusionamos ingeniería de vanguardia con un diseño enfocado en la velocidad y el crecimiento continuo de tu negocio.
          </p>
          <p>
            Convertimos el código en tu mayor ventaja competitiva: 
            <span class="text-accent">Ingeniería Sólida. Indexación Eficaz. Escala Garantizada.</span>
          </p>
        </div>

        <!-- Métricas limpias en español -->
        <div class="stats-row">
          <div class="stat-item">
            <span class="stat-number">+15</span>
            <span class="stat-label">Sistemas Desplegados</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Disponibilidad del Servicio</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">&lt; 1s</span>
            <span class="stat-label">Respuesta de Carga</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

/* --- LAYOUT GENERAL (Manteniendo el alto original exacto) --- */
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

/* --- BACKGROUND INNOVADOR --- */
.background-effects {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

/* Grilla técnica de fondo */
.tech-grid {
  position: absolute;
  inset: 0;
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, rgba(0, 112, 243, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 112, 243, 0.05) 1px, transparent 1px);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%);
  -webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%);
}

.noise-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* Orbes dinámicos con destellos */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.45;
  animation: float 18s infinite ease-in-out;
}

.orb-primary {
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(0, 112, 243, 0.25) 0%, rgba(0, 112, 243, 0) 70%);
  top: -15%;
  left: -10%;
}

.orb-accent {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.18) 0%, rgba(124, 58, 237, 0) 70%);
  bottom: -15%;
  right: -5%;
  animation-delay: -6s;
}

.orb-glow {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0) 70%);
  top: 35%;
  right: 25%;
  animation-delay: -12s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -30px) scale(1.08); }
}

/* --- CONTENIDO PRINCIPAL --- */
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
  margin-bottom: 2.5rem;
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
  margin-bottom: 3.5rem;
}

.brand-inline {
  font-weight: 600;
  color: #171717;
}

.highlight-paragraph {
  font-size: 1.45rem;
  color: #171717;
  font-weight: 500;
  padding: 0 2rem;
  position: relative;
  line-height: 1.4;
}

.highlight-paragraph::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 75%;
  background: #0070f3;
  border-radius: 2px;
  box-shadow: 0 0 12px rgba(0, 112, 243, 0.5);
}

.text-accent {
  font-weight: 600;
  color: #0070f3;
}

/* --- STATS --- */
.stats-row {
  display: flex;
  justify-content: center;
  gap: 5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 2.5rem;
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
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
}

.stat-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
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
    font-size: 1.2rem;
    padding: 0 0 0 1.25rem;
  }

  .stats-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.75rem;
  }

  .stat-item {
    align-items: flex-start;
  }

  .stat-number {
    font-size: 2.75rem;
  }
}
</style>