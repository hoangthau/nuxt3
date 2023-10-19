<script setup lang="ts">

const props = defineProps<{
  modelValue: string
}>();

const emits = defineEmits(['update:modelValue']);

const activeItem = ref<string | null>(props.modelValue);

function select(value: string) {
  activeItem.value = value;
  emits('update:modelValue', value);
}
</script>
<template>
  <h3>RatingControl</h3>
  <ul>
    <li :class="{ active: activeItem === 'poor' }">
      <button @click="select('poor')">Poor</button>
    </li>
    <li :class="{ active: activeItem === 'average' }">
      <button @click=" select('average')">Average</button>
    </li>
    <li :class="{ active: activeItem === 'great' }">
      <button @click=" select('great')">Great</button>
    </li>
  </ul>
</template>
<style scoped>
ul {
  display: flex;
}

.active button {
  color: red;
}
</style>