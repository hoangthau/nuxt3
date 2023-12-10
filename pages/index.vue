<template>
  <h1>Nuxt Demo</h1>
  <div class="links">
   <NuxtLink to="/">Home Page</NuxtLink>
   <NuxtLink to="/my-test">Test Page</NuxtLink>
   <NuxtLink to="/perf">Perf Page</NuxtLink>
  </div>
  <p>{{ time }}</p>
</template>
<script setup lang="ts">
  const time = new Date().toISOString()
</script>
<style scoped>
.links {
  display: flex;
  flex-direction: column;
}
</style>
