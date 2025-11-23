<template>
  <div class="app">
    <NavBar />

    <StartSection />

    <AboutSection />

    <ProjectsSection />

    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import StartSection from '@/components/StartSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<style scoped>
/* Variables CSS */
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --muted: #f5f5f5;
  --muted-foreground: #737373;
  --border: #e5e5e5;
  --primary: #0070f3;
  --primary-foreground: #ffffff;
}

/* El contenedor principal de la vista.
   width: 100% asegura que tome todo el ancho disponible tras el reset del body 
*/
.app {
  width: 100%;
  min-height: 100vh;
  background: var(--background);
  color: var(--foreground);
  display: flex;
  flex-direction: column;
}
</style>