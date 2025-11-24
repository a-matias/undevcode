<template>
  <section id="inicio" class="hero" aria-label="Sección inicio con estrellas parallax">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>

    <div class="hero-glow"></div>

    <div class="hero-layout">
      <div class="hero-content">

        <div class="text-content">
          <div class="badge-wrapper fade-in-1">
            <span class="badge">Innovation Lab 2025</span>
          </div>

          <h1 class="hero-title fade-in-2">
            <span class="title-line">Transformamos ideas</span>
            <span class="title-line">en soluciones</span>
            <span class="gradient-text title-highlight">digitales</span>
          </h1>
          
          <p class="hero-subtitle fade-in-3">
            Diseñamos y desarrollamos software de alto impacto. 
            Llevamos tu negocio al siguiente nivel con tecnología de vanguardia y arquitectura escalable.
          </p>

          <div class="cta-group fade-in-4">
            <a href="#proyectos" class="btn-primary">
              Ver Proyectos
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#nosotros" class="btn-secondary">
              Conocenos
            </a>
          </div>
        </div>

        <div class="terminal-wrapper fade-in-delayed">
          <TerminalShowcase />
        </div>

      </div>
    </div>

    <a href="#nosotros" class="scroll-indicator fade-in-5">
      <span class="mouse">
        <span class="wheel"></span>
      </span>
      <span class="arrow-down"></span>
    </a>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import TerminalShowcase from './TerminalShowcase.vue'

onMounted(() => {
  // Lógica adicional si es necesaria
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500&display=swap');

/* ==== HERO BASE ==== */
.hero {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  overflow: hidden;
  position: relative;
}

/* Glow atmosférico */
.hero-glow {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 112, 243, 0.15) 0%, transparent 70%);
  filter: blur(80px);
  z-index: 1;
  pointer-events: none;
}

.hero-layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;
  max-width: 1280px; 
  margin: 0 auto;
  padding: 6rem 1rem 2rem 1rem;
}

@media (min-width: 640px) { .hero-layout { padding-left: 1.5rem; padding-right: 1.5rem; } }
@media (min-width: 1024px) { .hero-layout { padding-left: 2rem; padding-right: 2rem; } }

/* ==== CONTENT ==== */
.hero-content {
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1024px) {
  .hero-content {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    align-items: center;
  }
}

.text-content {
  flex: 1;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
}

@media (min-width: 1024px) {
  .text-content {
    align-items: flex-start;
  }
}

/* ==== TYPOGRAPHY (CAMBIOS AQUI) ==== */
.badge-wrapper {
  margin-bottom: 1.5rem;
}

.badge {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  color: #a5f3fc;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-title {
  font-family: "Bebas Neue", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  color: #FAFAFA;
  font-size: 3rem;
  line-height: 1; /* Line height apretado para que se vea compacto */
  margin-bottom: 1.5rem;
}

/* Lógica para distribución de texto */
.title-line {
  display: block; /* En móvil, fuerza salto de línea */
}

.title-highlight {
  display: block; /* En móvil, fuerza salto de línea */
  font-size: 1.3em; /* 30% más grande que el texto normal en móvil */
  margin-top: 5px;  /* Un pequeño espacio extra antes de "Digitales" */
}

.gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, #0070f3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Ajustes Responsive para el título */
@media (min-width: 640px) { 
  .hero-title { font-size: 3.75rem; } 
}

@media (min-width: 1024px) { 
  .hero-title { font-size: 5rem; }
  
  /* En Desktop reseteamos para que fluya más natural o como prefieras */
  .title-line {
    display: inline; 
  }
  .title-line::after {
    content: " "; /* Agrega espacio entre palabras al estar inline */
  }
  
  .title-highlight {
    display: inline;
    font-size: inherit; /* En desktop vuelve al tamaño normal del H1 */
    margin-top: 0;
  }
}

.hero-subtitle {
  font-family: 'Inter', sans-serif;
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 500px;
}

@media (min-width: 1024px) { .hero-subtitle { font-size: 1.125rem; } }

/* ==== BUTTONS ==== */
.cta-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 1024px) { .cta-group { justify-content: flex-start; } }

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #ffffff;
  color: #000000;
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.4);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  transition: background 0.2s, border-color 0.2s;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #ffffff;
}

/* ==== TERMINAL WRAPPER ==== */
.terminal-wrapper {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  animation: float-terminal 6s ease-in-out infinite;
}

@media (min-width: 1024px) {
  .terminal-wrapper {
    justify-content: flex-end;
  }
}

@keyframes float-terminal {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* ==== SCROLL INDICATOR ==== */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.scroll-indicator:hover { opacity: 1; }

.mouse {
  width: 26px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 20px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: #fff;
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-wheel 1.5s infinite;
}

.arrow-down {
  width: 10px;
  height: 10px;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(45deg);
  animation: scroll-arrow 1.5s infinite;
  animation-delay: 0.2s;
}

@keyframes scroll-wheel {
  0% { top: 6px; opacity: 1; }
  100% { top: 18px; opacity: 0; }
}

@keyframes scroll-arrow {
  0% { opacity: 0; transform: rotate(45deg) translate(-5px, -5px); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: rotate(45deg) translate(5px, 5px); }
}

/* ==== ANIMATIONS ==== */
.fade-in-1 { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; animation-delay: 0.1s; }
.fade-in-2 { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; animation-delay: 0.3s; }
.fade-in-3 { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; animation-delay: 0.5s; }
.fade-in-4 { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; animation-delay: 0.7s; }
.fade-in-delayed { animation: fadeInUp 1s ease-out forwards; opacity: 0; animation-delay: 0.5s; }
.fade-in-5 { animation: fadeIn 1s ease-out forwards; opacity: 0; animation-delay: 1.2s; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 0.7; }
}

/* ==== ESTRELLAS (Mismo CSS) ==== */
#stars { width: 1px; height: 1px; background: transparent; box-shadow: 1755px 1199px #FFF, 294px 1586px #FFF, 1817px 646px #FFF, 1118px 962px #FFF, 1853px 1754px #FFF, 814px 1066px #FFF, 1478px 728px #FFF, 654px 1490px #FFF, 945px 309px #FFF, 1712px 948px #FFF, 389px 1556px #FFF, 1002px 591px #FFF, 1888px 1304px #FFF, 721px 874px #FFF, 1345px 1632px #FFF, 1556px 423px #FFF, 267px 1789px #FFF, 1823px 512px #FFF, 998px 1456px #FFF, 1634px 1089px #FFF, 456px 734px #FFF, 1245px 1823px #FFF, 1789px 245px #FFF, 567px 1345px #FFF, 1456px 876px #FFF, 823px 1567px #FFF, 345px 998px #FFF, 1678px 456px #FFF, 789px 1234px #FFF, 1234px 789px #FFF, 567px 1678px #FFF, 1890px 123px #FFF, 234px 1456px #FFF, 1567px 890px #FFF, 890px 234px #FFF, 1345px 1567px #FFF, 123px 890px #FFF, 1678px 345px #FFF, 456px 1789px #FFF, 1789px 567px #FFF, 345px 1234px #FFF, 1456px 678px #FFF, 678px 1890px #FFF, 1890px 456px #FFF, 234px 678px #FFF, 1567px 1234px #FFF, 890px 1567px #FFF, 1234px 345px #FFF, 567px 890px #FFF, 1678px 1456px #FFF, 123px 1678px #FFF, 1345px 234px #FFF, 789px 1345px #FFF, 1456px 1789px #FFF, 345px 567px #FFF, 1890px 1234px #FFF, 456px 123px #FFF, 1234px 1456px #FFF, 678px 345px #FFF, 1567px 678px #FFF, 234px 1890px #FFF, 890px 456px #FFF, 1678px 789px #FFF, 123px 1567px #FFF; animation: animStar 50s linear infinite; position: absolute; top: 0; left: 0; }
#stars:after { content: " "; position: absolute; top: 2000px; width: 1px; height: 1px; background: transparent; box-shadow: 1755px 1199px #FFF, 294px 1586px #FFF, 1817px 646px #FFF, 1118px 962px #FFF, 1853px 1754px #FFF, 814px 1066px #FFF, 1478px 728px #FFF, 654px 1490px #FFF, 945px 309px #FFF, 1712px 948px #FFF, 389px 1556px #FFF, 1002px 591px #FFF, 1888px 1304px #FFF, 721px 874px #FFF, 1345px 1632px #FFF, 1556px 423px #FFF, 267px 1789px #FFF, 1823px 512px #FFF, 998px 1456px #FFF, 1634px 1089px #FFF, 456px 734px #FFF, 1245px 1823px #FFF, 1789px 245px #FFF, 567px 1345px #FFF, 1456px 876px #FFF, 823px 1567px #FFF, 345px 998px #FFF, 1678px 456px #FFF, 789px 1234px #FFF, 1234px 789px #FFF, 567px 1678px #FFF, 1890px 123px #FFF, 234px 1456px #FFF, 1567px 890px #FFF, 890px 234px #FFF, 1345px 1567px #FFF, 123px 890px #FFF, 1678px 345px #FFF, 456px 1789px #FFF, 1789px 567px #FFF, 345px 1234px #FFF, 1456px 678px #FFF, 678px 1890px #FFF, 1890px 456px #FFF, 234px 678px #FFF, 1567px 1234px #FFF, 890px 1567px #FFF, 1234px 345px #FFF, 567px 890px #FFF, 1678px 1456px #FFF, 123px 1678px #FFF, 1345px 234px #FFF, 789px 1345px #FFF, 1456px 1789px #FFF, 345px 567px #FFF, 1890px 1234px #FFF, 456px 123px #FFF, 1234px 1456px #FFF, 678px 345px #FFF, 1567px 678px #FFF, 234px 1890px #FFF, 890px 456px #FFF, 1678px 789px #FFF, 123px 1567px #FFF; }
#stars2 { width: 2px; height: 2px; background: transparent; box-shadow: 1234px 567px #FFF, 890px 1345px #FFF, 456px 1789px #FFF, 1678px 234px #FFF, 345px 1456px #FFF, 1890px 678px #FFF, 567px 1234px #FFF, 1345px 890px #FFF, 789px 456px #FFF, 1456px 1678px #FFF, 234px 345px #FFF, 1567px 1890px #FFF, 678px 789px #FFF, 1789px 1234px #FFF, 123px 1567px #FFF, 1890px 345px #FFF, 456px 678px #FFF, 1234px 1456px #FFF, 890px 123px #FFF, 1678px 567px #FFF, 345px 890px #FFF, 1456px 234px #FFF, 789px 1678px #FFF, 1567px 456px #FFF, 234px 1234px #FFF, 1345px 789px #FFF, 567px 1890px #FFF, 1789px 123px #FFF, 678px 1345px #FFF, 1890px 1567px #FFF, 123px 234px #FFF, 1456px 345px #FFF, 890px 1789px #FFF, 1234px 678px #FFF, 456px 1456px #FFF, 1678px 890px #FFF, 345px 1567px #FFF, 1567px 1345px #FFF, 789px 234px #FFF, 1345px 1678px #FFF; animation: animStar 100s linear infinite; position: absolute; top: 0; left: 0; }
#stars2:after { content: " "; position: absolute; top: 2000px; width: 2px; height: 2px; background: transparent; box-shadow: 1234px 567px #FFF, 890px 1345px #FFF, 456px 1789px #FFF, 1678px 234px #FFF, 345px 1456px #FFF, 1890px 678px #FFF, 567px 1234px #FFF, 1345px 890px #FFF, 789px 456px #FFF, 1456px 1678px #FFF, 234px 345px #FFF, 1567px 1890px #FFF, 678px 789px #FFF, 1789px 1234px #FFF, 123px 1567px #FFF, 1890px 345px #FFF, 456px 678px #FFF, 1234px 1456px #FFF, 890px 123px #FFF, 1678px 567px #FFF, 345px 890px #FFF, 1456px 234px #FFF, 789px 1678px #FFF, 1567px 456px #FFF, 234px 1234px #FFF, 1345px 789px #FFF, 567px 1890px #FFF, 1789px 123px #FFF, 678px 1345px #FFF, 1890px 1567px #FFF, 123px 234px #FFF, 1456px 345px #FFF, 890px 1789px #FFF, 1234px 678px #FFF, 456px 1456px #FFF, 1678px 890px #FFF, 345px 1567px #FFF, 1567px 1345px #FFF, 789px 234px #FFF, 1345px 1678px #FFF; }
#stars3 { width: 3px; height: 3px; background: transparent; box-shadow: 1567px 890px #FFF, 345px 1234px #FFF, 1789px 456px #FFF, 678px 1567px #FFF, 1234px 345px #FFF, 890px 1678px #FFF, 1456px 789px #FFF, 234px 1345px #FFF, 1678px 567px #FFF, 456px 1890px #FFF, 1345px 234px #FFF, 789px 1456px #FFF, 1890px 678px #FFF, 567px 345px #FFF, 1234px 1567px #FFF, 123px 789px #FFF, 1456px 1234px #FFF, 890px 567px #FFF, 1678px 1345px #FFF, 345px 678px #FFF, 1567px 1789px #FFF, 234px 890px #FFF, 1789px 1456px #FFF, 678px 234px #FFF, 1345px 1678px #FFF, 456px 1567px #FFF, 1890px 345px #FFF, 789px 1890px #FFF, 1234px 123px #FFF, 567px 1456px #FFF, 1456px 567px #FFF, 890px 1234px #FFF, 1678px 789px #FFF, 345px 1890px #FFF, 1567px 456px #FFF, 234px 1678px #FFF; animation: animStar 150s linear infinite; position: absolute; top: 0; left: 0; }
#stars3:after { content: " "; position: absolute; top: 2000px; width: 3px; height: 3px; background: transparent; box-shadow: 1567px 890px #FFF, 345px 1234px #FFF, 1789px 456px #FFF, 678px 1567px #FFF, 1234px 345px #FFF, 890px 1678px #FFF, 1456px 789px #FFF, 234px 1345px #FFF, 1678px 567px #FFF, 456px 1890px #FFF, 1345px 234px #FFF, 789px 1456px #FFF, 1890px 678px #FFF, 567px 345px #FFF, 1234px 1567px #FFF, 123px 789px #FFF, 1456px 1234px #FFF, 890px 567px #FFF, 1678px 1345px #FFF, 345px 678px #FFF, 1567px 1789px #FFF, 234px 890px #FFF, 1789px 1456px #FFF, 678px 234px #FFF, 1345px 1678px #FFF, 456px 1567px #FFF, 1890px 345px #FFF, 789px 1890px #FFF, 1234px 123px #FFF, 567px 1456px #FFF, 1456px 567px #FFF, 890px 1234px #FFF, 1678px 789px #FFF, 345px 1890px #FFF, 1567px 456px #FFF, 234px 1678px #FFF; }
@keyframes animStar { from { transform: translateY(0px); } to { transform: translateY(-2000px); } }
</style>