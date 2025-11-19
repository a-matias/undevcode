<template>
  <div class="terminal-container">
    <div class="glow-effect"></div>

    <div class="terminal-frame">
      <TerminalAnimation />
      <div class="overlay-grid"></div>
    </div>

    <!-- <div class="floating-elements">
      <div class="float-dot dot-1"></div>
      <div class="float-dot dot-2"></div>
      <div class="float-dot dot-3"></div>
    </div> -->
  </div>
</template>

<script setup>
import TerminalAnimation from './TerminalAnimation.vue'
</script>

<style scoped>
/* Copiamos *solo* los estilos que pertenecen a la terminal */

.terminal-container {
  flex: 1;
  position: relative;
  max-width: 600px;
  width: 100%;
  animation: floatTerminal 5s ease-in-out infinite;
}

@keyframes floatTerminal {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}


.glow-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  /* background: radial-gradient(circle, rgba(0, 255, 0, 0.2) 0%, rgba(74, 194, 154, 0) 70%); */
  filter: blur(40px);
  z-index: 0;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
}

.terminal-frame {
  position: relative;
  z-index: 1;
  border-radius: 12px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  /* box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 255, 0, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.1); */
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.terminal-frame:hover {
  transform: translateZ(10px) rotateX(1deg) rotateY(-1deg);
  /* box-shadow: rgba(255, 255, 255, 0.4) 0px 5px, rgba(255, 255, 255, 0.3) 0px 10px, rgba(255, 255, 255, 0.2) 0px 15px, rgba(255, 255, 255, 0.1) 0px 20px, rgba(255, 255, 255, 0.05) 0px 25px; */
  
}

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
  0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
  50% { transform: translateY(-30px) scale(1.2); opacity: 1; }
}

@media (max-width: 640px) {
  .terminal-container {
    max-width: 100%;
    margin: 0 auto;
    transform: scale(0.85); /* reduce tamaño visual */
    height: 260px;          /* 🔥 ACHICA ALTURA REAL */
    overflow: hidden;       /* evita que se deforme */
    animation: none;
  }

  .terminal-frame {
    height: 100%;        /* ocupa el nuevo alto reducido */
    padding: 6px;
  }

  .glow-effect {
    width: 100%;
    height: 100%;
  }
}
</style>
