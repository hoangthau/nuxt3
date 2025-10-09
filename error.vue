<template>
  <div>
    <p>Error {{ error.statusCode }}</p>
    <span>fix1</span>
    <span>fix2</span>
    <span>fix3</span>
  </div>
</template>

<script setup>
const error = useError();
</script>

<style>
</style>