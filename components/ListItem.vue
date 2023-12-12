<template>
  <li :class="{'text-teal-300': activeId === id}" @click="$emit('click', id)">{{ title }}</li>
</template>

<script setup lang="ts">

const props = defineProps<{
  id: number;
  title: string;
  activeId: number
}>();

defineEmits(['click']);

onUpdated(() => {
  console.log('update item: ', props.id)
})

</script>

<style lang="scss" scoped>

</style>