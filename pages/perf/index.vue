<template>
  <MyCounter v-if="termOfService" :is-loading="isLoading" ref="counterRef" :on-change="changeCounter"
    :termOfService="termOfService" :msg="msg">
    <button @click="updateCounter">Update loading</button>
  </MyCounter>
  <RatingControl v-model="rating"></RatingControl>
  <input v-model="msg" />
  <p v-for="(item, index) in items" :key="item.title">{{ item.title }}</p>
  <button @click="add">Add</button>
</template>

<script setup lang="ts">
import MyCounter from '~/components/MyCounter.vue';

const isLoading = ref(true);
const person = ref({
  info: {
    age: 10,
    name: 'Thau'
  }
})
const counterRef = ref<InstanceType<typeof MyCounter> | null>(null);
const rating = ref('poor')
const msg = ref('');
const termOfService = ref(false);
const items = ref([{
  title: 'Task 1'
}])

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
    termOfService.value = true
  }, 2000)
})

watch(person, (newVal, oldVal) => {
  console.log(newVal.info);
}, { deep: true })

function updateCounter() {
  isLoading.value = !isLoading.value;
}

function changeCounter(value: number) {
  console.log(value);
}

function add() {
  items.value.push({ title: 'Task 2' })
}
</script>

<style scoped></style> f

