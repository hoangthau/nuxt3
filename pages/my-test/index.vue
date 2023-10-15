<template>
  <MyCounter :is-loading="isLoading">

  </MyCounter>
  <button @click="handleScroll">
    Scroll to #element
  </button>

  <button v-scroll-to="'#element'">
    Scroll to #element 2
  </button>

  <h1 id="element">Hi. I'm element</h1>
</template>

<script setup lang="ts">
const isLoading = ref(true);
const { $scrollTo } = useNuxtApp();
const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;

  }, 2000)
})

function handleScroll() {
  $scrollTo('#element');
}
</script>

<style scoped>
h1,
button {
  margin-bottom: 1000px;
}
</style>

