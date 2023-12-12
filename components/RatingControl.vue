<script setup lang="ts">

const props = defineProps<{
  modelValue: string;
  status: boolean;
}>();

const emits = defineEmits(['update:modelValue', 'update:status']);

const activeItem = ref<string | null>(props.modelValue);
const checkStatus = ref(props.status);

function select(value: string) {
  activeItem.value = value;
  emits('update:modelValue', value);
}

function changeStatus(e: any) {
  console.log(e.target.checked);
  emits('update:status', checkStatus.value )
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
  status
  <input type="checkbox" v-model="checkStatus" @change="changeStatus" />
</template>
<style scoped>
ul {
  display: flex;
}

.active button {
  color: red;
}
</style>