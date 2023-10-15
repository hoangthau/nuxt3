<template>
  <div>
    <h2>Counter</h2>
    <p v-if="checkLoading" :class="{ 'loading': checkLoading }">Loading ...</p>
    <p>{{ count }}</p>
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

const checkLoading = computed(() => {
  return props.isLoading;
});

console.log('render')
</script>
