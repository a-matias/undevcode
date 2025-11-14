<template>
  <section id="inicio" class="hero">
    <LayoutView class="hero-layout">
      <div class="hero-content">
        <div class="text-content">
          <h1 class="hero-title">
            Transformamos ideas en soluciones digitales
          </h1>
          <!-- <p class="hero-description">
            Código real para quienes piensan distinto.
          </p> -->
        </div>
        
        <!-- Contenedor de terminal con efectos futuristas -->
        <div class="terminal-container">
          <div class="glow-effect"></div>
          <div class="terminal-frame">
            <TerminalAnimation />
            <div class="overlay-grid"></div>
          </div>
          <div class="floating-elements">
            <div class="float-dot dot-1"></div>
            <div class="float-dot dot-2"></div>
            <div class="float-dot dot-3"></div>
          </div>
        </div>
      </div>
    </LayoutView>
  </section>
</template>

<script setup>
import LayoutView from './LayoutView.vue'
import TerminalAnimation from './TerminalAnimation.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@400..900&display=swap');

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0;
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(29, 26, 26, 0.4) 0%, rgba(0, 0, 0, 0.25) 200%);
  background-blend-mode: multiply;
  overflow: hidden;
  position: relative;
}

.hero-layout {
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 0;
}

.hero-content {
  text-align: center;
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1024px) {
  .hero-content {
    flex-direction: row;
    text-align: left;
    gap: 4rem;
  }
}

.text-content {
  flex: 1;
}

.hero-title {
  font-family: "Bebas Neue", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  color: #FAFAFA;
  text-shadow: 0 0 15px rgba(0,0,0,0.1); 
  font-size: 4rem;
}

.hero-description {
  font-family: "Orbitron", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #E5E7EB;
  font-size: 1.125rem;
  margin-top: 1rem;
}

@media (min-width: 640px) {
  .hero-title {
    font-size: 3rem;
  }
  .hero-description {
    font-size: 1.25rem;
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

/* Contenedor de terminal con efectos */
.terminal-container {
  flex: 1;
  position: relative;
  max-width: 600px;
  width: 100%;
  animation: floatTerminal 6s ease-in-out infinite;
}

@keyframes floatTerminal {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Efecto de brillo/glow detrás de la terminal */
.glow-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(0, 255, 0, 0.2) 0%, rgba(74, 194, 154, 0) 70%);
  filter: blur(40px);
  z-index: 0;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

/* Marco de la terminal con efecto glassmorphism */
.terminal-frame {
  position: relative;
  z-index: 1;
  border-radius: 12px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 255, 0, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.terminal-frame:hover {
  transform: translateZ(20px) rotateX(2deg) rotateY(-2deg);
  box-shadow: 
    0 30px 80px rgba(0, 0, 0, 0.4),
    0 0 60px rgba(0, 255, 0, 0.4),
    inset 0 0 30px rgba(255, 255, 255, 0.2);
}

/* Grid overlay futurista */
.overlay-grid {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  border-radius: 8px;
  background-image: 
    linear-gradient(rgba(0, 255, 0, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  pointer-events: none;
  z-index: 3;
  opacity: 0.3;
}

/* Elementos flotantes decorativos */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.float-dot {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(0, 255, 0, 0.8);
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.8);
}

.dot-1 {
  top: 10%;
  right: -5%;
  animation: floatDot 4s ease-in-out infinite;
}

.dot-2 {
  bottom: 20%;
  left: -5%;
  animation: floatDot 5s ease-in-out infinite 1s;
}

.dot-3 {
  top: 50%;
  right: -3%;
  animation: floatDot 6s ease-in-out infinite 2s;
  width: 6px;
  height: 6px;
}

@keyframes floatDot {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-30px) scale(1.2);
    opacity: 1;
  }
}
</style>