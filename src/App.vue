<template>
  <HomeView />  
</template>

<script setup>
import HomeView from './views/HomeView.vue'
</script>

<style>
/* Reset básico para eliminar márgenes del navegador */
body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden; /* Evita scroll horizontal accidental */
  background: #ffffff; /* Color de fondo base */
}

/* Asegura que el padding no sume al ancho total de los elementos */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Tipografía base opcional */
html {
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth; /* Desplazamiento suave entre anclas */
}
</style>