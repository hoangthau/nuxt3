<template>
  <MyCounter v-if="termOfService" :is-loading="isLoading" ref="counterRef" :on-change="changeCounter"
    :termOfService="termOfService" :msg="msg">
    <button @click="updateCounter">Update loading</button>
  </MyCounter>
  <hr />
  <h3 class="font-bold">v-model on component</h3>
  <RatingControl v-model="rating" v-model:status="status"></RatingControl>
  <input v-model="msg" />
  <p v-for="(item, index) in items" :key="item.title">{{ item.title }}</p>
  <button @click="add">Add</button>
  <hr />
  <h3 class="font-bold">Props stability: v-memo, v-once</h3>
  <ul>
    <ListItem v-for="item in list" :id="item.id" :title="item.title" :active-id="activeId" @click="clickOnItem" v-memo="[item.id !== activeId]" />
  </ul>
</template>

<script setup lang="ts">
import MyCounter from '~/components/MyCounter.vue';

const status = ref(true);
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
const list = ref([
  {
    title: 'Item 1',
    id: 1
  },
  {
    title: 'Item 2',
    id: 2
  },
  {
    title: 'Item 3',
    id: 3
  },
  {
    title: 'Item 4',
    id: 4
  }
]);
const activeId = ref(0);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
    termOfService.value = true
  }, 2000)
})

watch(person, (newVal, oldVal) => {
  console.log(newVal.info);
}, { deep: true })

watch([rating, status], (val) => {
  console.log('status', val)
});

function updateCounter() {
  isLoading.value = !isLoading.value;
}

function changeCounter(value: number) {
  console.log(value);
}

function add() {
  items.value.push({ title: 'Task 2' })
}

function clickOnItem(id: number) {
  activeId.value = id
}
</script>

<style scoped></style> f

