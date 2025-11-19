<template>
  <div class="app">
    <!-- Navigation Component -->
    <NavBar />

    <!-- Start Section -->
    <StartSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Projects Section -->
    <ProjectsSection />

    <!-- Footer -->
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
* {
  box-sizing: border-box;
}

:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --muted: #f5f5f5;
  --muted-foreground: #737373;
  --border: #e5e5e5;
  --primary: #0070f3;
  --primary-foreground: #ffffff;
}

.app {
  min-height: 100vh;
  background: var(--background);
  color: var(--foreground);
}
</style>
