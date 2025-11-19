<template>
  <section id="inicio" class="hero" aria-label="Sección inicio con estrellas parallax">
    <!-- Capas de estrellas con parallax -->
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>

    <div class="hero-layout">
      <div class="hero-content">

        <div class="text-content">
          <h1 class="hero-title">
            Transformamos ideas en soluciones digitales
          </h1>
        </div>

        <!-- Componente modularizado -->
        <TerminalShowcase />

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import TerminalShowcase from './TerminalShowcase.vue'

onMounted(() => {
  // Componente montado
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@300;400;700&family=Orbitron:wght@400..900&display=swap');

/* ==== HERO (contenedor) ==== */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  overflow: hidden;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ==== ESTRELLAS PARALLAX ==== */
#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1755px 1199px #FFF, 294px 1586px #FFF, 1817px 646px #FFF, 1118px 962px #FFF, 
    1853px 1754px #FFF, 814px 1066px #FFF, 1478px 728px #FFF, 654px 1490px #FFF, 
    945px 309px #FFF, 1712px 948px #FFF, 389px 1556px #FFF, 1002px 591px #FFF,
    1888px 1304px #FFF, 721px 874px #FFF, 1345px 1632px #FFF, 1556px 423px #FFF,
    267px 1789px #FFF, 1823px 512px #FFF, 998px 1456px #FFF, 1634px 1089px #FFF,
    456px 734px #FFF, 1245px 1823px #FFF, 1789px 245px #FFF, 567px 1345px #FFF,
    1456px 876px #FFF, 823px 1567px #FFF, 345px 998px #FFF, 1678px 456px #FFF,
    789px 1234px #FFF, 1234px 789px #FFF, 567px 1678px #FFF, 1890px 123px #FFF,
    234px 1456px #FFF, 1567px 890px #FFF, 890px 234px #FFF, 1345px 1567px #FFF,
    123px 890px #FFF, 1678px 345px #FFF, 456px 1789px #FFF, 1789px 567px #FFF,
    345px 1234px #FFF, 1456px 678px #FFF, 678px 1890px #FFF, 1890px 456px #FFF,
    234px 678px #FFF, 1567px 1234px #FFF, 890px 1567px #FFF, 1234px 345px #FFF,
    567px 890px #FFF, 1678px 1456px #FFF, 123px 1678px #FFF, 1345px 234px #FFF,
    789px 1345px #FFF, 1456px 1789px #FFF, 345px 567px #FFF, 1890px 1234px #FFF,
    456px 123px #FFF, 1234px 1456px #FFF, 678px 345px #FFF, 1567px 678px #FFF,
    234px 1890px #FFF, 890px 456px #FFF, 1678px 789px #FFF, 123px 1567px #FFF;
  animation: animStar 50s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
}

#stars:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1755px 1199px #FFF, 294px 1586px #FFF, 1817px 646px #FFF, 1118px 962px #FFF, 
    1853px 1754px #FFF, 814px 1066px #FFF, 1478px 728px #FFF, 654px 1490px #FFF, 
    945px 309px #FFF, 1712px 948px #FFF, 389px 1556px #FFF, 1002px 591px #FFF,
    1888px 1304px #FFF, 721px 874px #FFF, 1345px 1632px #FFF, 1556px 423px #FFF,
    267px 1789px #FFF, 1823px 512px #FFF, 998px 1456px #FFF, 1634px 1089px #FFF,
    456px 734px #FFF, 1245px 1823px #FFF, 1789px 245px #FFF, 567px 1345px #FFF,
    1456px 876px #FFF, 823px 1567px #FFF, 345px 998px #FFF, 1678px 456px #FFF,
    789px 1234px #FFF, 1234px 789px #FFF, 567px 1678px #FFF, 1890px 123px #FFF,
    234px 1456px #FFF, 1567px 890px #FFF, 890px 234px #FFF, 1345px 1567px #FFF,
    123px 890px #FFF, 1678px 345px #FFF, 456px 1789px #FFF, 1789px 567px #FFF,
    345px 1234px #FFF, 1456px 678px #FFF, 678px 1890px #FFF, 1890px 456px #FFF,
    234px 678px #FFF, 1567px 1234px #FFF, 890px 1567px #FFF, 1234px 345px #FFF,
    567px 890px #FFF, 1678px 1456px #FFF, 123px 1678px #FFF, 1345px 234px #FFF,
    789px 1345px #FFF, 1456px 1789px #FFF, 345px 567px #FFF, 1890px 1234px #FFF,
    456px 123px #FFF, 1234px 1456px #FFF, 678px 345px #FFF, 1567px 678px #FFF,
    234px 1890px #FFF, 890px 456px #FFF, 1678px 789px #FFF, 123px 1567px #FFF;
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 1234px 567px #FFF, 890px 1345px #FFF, 456px 1789px #FFF, 1678px 234px #FFF,
    345px 1456px #FFF, 1890px 678px #FFF, 567px 1234px #FFF, 1345px 890px #FFF,
    789px 456px #FFF, 1456px 1678px #FFF, 234px 345px #FFF, 1567px 1890px #FFF,
    678px 789px #FFF, 1789px 1234px #FFF, 123px 1567px #FFF, 1890px 345px #FFF,
    456px 678px #FFF, 1234px 1456px #FFF, 890px 123px #FFF, 1678px 567px #FFF,
    345px 890px #FFF, 1456px 234px #FFF, 789px 1678px #FFF, 1567px 456px #FFF,
    234px 1234px #FFF, 1345px 789px #FFF, 567px 1890px #FFF, 1789px 123px #FFF,
    678px 1345px #FFF, 1890px 1567px #FFF, 123px 234px #FFF, 1456px 345px #FFF,
    890px 1789px #FFF, 1234px 678px #FFF, 456px 1456px #FFF, 1678px 890px #FFF,
    345px 1567px #FFF, 1567px 1345px #FFF, 789px 234px #FFF, 1345px 1678px #FFF;
  animation: animStar 100s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
}

#stars2:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 1234px 567px #FFF, 890px 1345px #FFF, 456px 1789px #FFF, 1678px 234px #FFF,
    345px 1456px #FFF, 1890px 678px #FFF, 567px 1234px #FFF, 1345px 890px #FFF,
    789px 456px #FFF, 1456px 1678px #FFF, 234px 345px #FFF, 1567px 1890px #FFF,
    678px 789px #FFF, 1789px 1234px #FFF, 123px 1567px #FFF, 1890px 345px #FFF,
    456px 678px #FFF, 1234px 1456px #FFF, 890px 123px #FFF, 1678px 567px #FFF,
    345px 890px #FFF, 1456px 234px #FFF, 789px 1678px #FFF, 1567px 456px #FFF,
    234px 1234px #FFF, 1345px 789px #FFF, 567px 1890px #FFF, 1789px 123px #FFF,
    678px 1345px #FFF, 1890px 1567px #FFF, 123px 234px #FFF, 1456px 345px #FFF,
    890px 1789px #FFF, 1234px 678px #FFF, 456px 1456px #FFF, 1678px 890px #FFF,
    345px 1567px #FFF, 1567px 1345px #FFF, 789px 234px #FFF, 1345px 1678px #FFF;
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1567px 890px #FFF, 345px 1234px #FFF, 1789px 456px #FFF, 678px 1567px #FFF,
    1234px 345px #FFF, 890px 1678px #FFF, 1456px 789px #FFF, 234px 1345px #FFF,
    1678px 567px #FFF, 456px 1890px #FFF, 1345px 234px #FFF, 789px 1456px #FFF,
    1890px 678px #FFF, 567px 345px #FFF, 1234px 1567px #FFF, 123px 789px #FFF,
    1456px 1234px #FFF, 890px 567px #FFF, 1678px 1345px #FFF, 345px 678px #FFF,
    1567px 1789px #FFF, 234px 890px #FFF, 1789px 1456px #FFF, 678px 234px #FFF,
    1345px 1678px #FFF, 456px 1567px #FFF, 1890px 345px #FFF, 789px 1890px #FFF,
    1234px 123px #FFF, 567px 1456px #FFF, 1456px 567px #FFF, 890px 1234px #FFF,
    1678px 789px #FFF, 345px 1890px #FFF, 1567px 456px #FFF, 234px 1678px #FFF;
  animation: animStar 150s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
}

#stars3:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1567px 890px #FFF, 345px 1234px #FFF, 1789px 456px #FFF, 678px 1567px #FFF,
    1234px 345px #FFF, 890px 1678px #FFF, 1456px 789px #FFF, 234px 1345px #FFF,
    1678px 567px #FFF, 456px 1890px #FFF, 1345px 234px #FFF, 789px 1456px #FFF,
    1890px 678px #FFF, 567px 345px #FFF, 1234px 1567px #FFF, 123px 789px #FFF,
    1456px 1234px #FFF, 890px 567px #FFF, 1678px 1345px #FFF, 345px 678px #FFF,
    1567px 1789px #FFF, 234px 890px #FFF, 1789px 1456px #FFF, 678px 234px #FFF,
    1345px 1678px #FFF, 456px 1567px #FFF, 1890px 345px #FFF, 789px 1890px #FFF,
    1234px 123px #FFF, 567px 1456px #FFF, 1456px 567px #FFF, 890px 1234px #FFF,
    1678px 789px #FFF, 345px 1890px #FFF, 1567px 456px #FFF, 234px 1678px #FFF;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}

/* Contenido por encima del fondo */
.hero-layout,
.hero-content,
.text-content {
  position: relative;
  z-index: 10;
}

/* ==== RESTO DE ESTILOS ==== */

.hero-layout {
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
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
  background: -webkit-linear-gradient(white, #38495a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
  font-size: 2.5rem;
  line-height: 1.1;
}

@media (min-width: 640px) {
  .hero-title { font-size: 3rem; }
}
@media (min-width: 768px) {
  .hero-title { font-size: 3.75rem; }
}
@media (min-width: 1024px) {
  .hero-title { font-size: 4.5rem; }
}
</style>