<template>
  <div class="layout-container">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.layout-container {
  width: 100%;
}

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
