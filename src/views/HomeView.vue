<template>
  <div class="app">
    <!-- Navigation Component -->
    <NavBar />

    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Services Section -->
    <!-- <ServicesSection /> -->

    <!-- Projects Section -->
    <ProjectsSection />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
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
