<template>
  <div>
    <h2>Counter</h2>
    <p v-if="isLoading" :class="{ 'loading': isLoading }">Loading ...</p>
    <h1 class="text-3xl mb-10">{{ count }}</h1>
    <button @click="count = count + step">Increment</button>
    <button @click="count = count - step">Decrement</button>
    <button @click="changeStep">Change step</button>
    <ul>
      <li v-for="item in data?.itemList" :key="item.id">{{ item.name }}</li>
    </ul>
    <div>
      Term Of Service: {{ termOfService }}
    </div>
    <div v-once>
      Message: {{ msg }}
    </div>
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
  onChange: {
    type: Function,
    required: false,
  },
  termOfService: {
    type: Boolean,
    required: false
  },
  msg: {
    type: String,
    required: false
  }
});
const count = ref(10);
let step = 1;
let countRender = 0;

// need to add computed for props changes
const checkLoading = computed(() => {
  return props.isLoading;
});

function changeStep() {
  step = step === 1 ? 10 : 1;
  props.onChange?.(step);
}

onRenderTracked((debug) => {
  countRender += 1;
  console.log(`Render times ${countRender} -  ${debug.key}`);
})

onUpdated(() => {
  console.log(`Updated`);
})

defineExpose({
  changeStep
})
</script>
