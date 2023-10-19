<template>
  <MyCounter :is-loading="isLoading" ref="counterRef">
    <button @click="updateCounter">Update counter from ref</button>
  </MyCounter>
  <RatingControl v-model="rating"></RatingControl>
</template>

<script setup lang="ts">
import MyCounter from '~/components/MyCounter.vue';

const isLoading = ref(true);
const counterRef = ref<InstanceType<typeof MyCounter> | null>(null);
const rating = ref('poor')

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;

  }, 2000)
})

function updateCounter() {
  counterRef.value?.changeStep();
  console.log(rating.value);
}
</script>

<style scoped></style>

