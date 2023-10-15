<template>
  <MyCounter :is-loading="isLoading">

  </MyCounter>
</template>

<script setup lang="ts">
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000)
})

</script>

