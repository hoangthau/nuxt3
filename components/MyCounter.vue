<template>
  <div>
    <h2>Counter</h2>
    <p v-if="checkLoading" :class="{ 'loading': checkLoading }">Loading ...</p>
    <h1 class="text-3xl mb-10">{{ count }}</h1>
    <button @click="count = count + step">Increment</button>
    <button @click="count = count - step">Decrement</button>
    <button @click="changeStep">Change step</button>
    <ul>
      <li v-for="item in data?.itemList" :key="item.id">{{ item.name }}</li>
    </ul>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Item {
  id: string;
  name: string;
}
interface Data {
  itemList: Item[];
}
const props = defineProps({
  data: {
    type: Object as PropType<Data>,
    required: false,
    default: [
      {
        id: 1,
        name: 'Item 1',
      },
    ],
  },
  isLoading: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const count = ref(10);
let step = 1;

// need to add computed for props changes
const checkLoading = computed(() => {
  return props.isLoading;
});

function changeStep() {
  step = step === 1 ? 10 : 1;
}

console.log('render')
</script>
