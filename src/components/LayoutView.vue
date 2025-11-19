<template>
  <div class="layout-container">
    <!-- Fondo global -->
    <!-- <div class="animated-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div> -->

    <!-- Contenido -->
    <div class="container content-layer">
      <slot />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.layout-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* Capa que contiene las secciones */
.content-layer {
  position: relative;
  z-index: 3; /* Muy importante */
}

/* ===== ORBES Y BACKGROUND GLOBAL ===== */

.animated-background {
  position: fixed;     /* Para que afecte TODA la landing */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none; /* No interfiere con clics */
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 1;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

/* Orb 1 */
.orb-1 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, rgba(0,112,243,0.3), rgba(0,212,255,0.2));
  top: -10%;
  left: -10%;
  animation: float1 20s infinite;
}

/* Orb 2 */
.orb-2 {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, rgba(147,51,234,0.25), rgba(59,130,246,0.2));
  bottom: -10%;
  right: -10%;
  animation: float2 25s infinite;
}

/* Orb 3 */
.orb-3 {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, rgba(6,182,212,0.2), rgba(16,185,129,0.15));
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float3 30s infinite;
}

/* Tamaños mayores en tablet/desktop */
@media (min-width: 768px) {
  .orb-1 { width: 400px; height: 400px; }
  .orb-2 { width: 350px; height: 350px; }
  .orb-3 { width: 300px; height: 300px; }
}

@media (min-width: 1024px) {
  .orb-1 { width: 500px; height: 500px; }
  .orb-2 { width: 400px; height: 400px; }
  .orb-3 { width: 350px; height: 350px; }
}

/* Animaciones */
@keyframes float1 {
  0%, 100% { transform: translate(0,0) scale(1); }
  33% { transform: translate(100px, -80px) scale(1.1); }
  66% { transform: translate(-50px, 100px) scale(0.9); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0,0) scale(1); }
  33% { transform: translate(-120px, 60px) scale(1.15); }
  66% { transform: translate(80px, -100px) scale(0.85); }
}

@keyframes float3 {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(calc(-50% + 150px), calc(-50% - 100px)) scale(1.2); }
}

/* === Tu container original === */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}
</style>
