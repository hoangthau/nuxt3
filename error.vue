<template>
  <div>
    <p>Error {{ error.statusCode }}</p>
    <span>fix1</span>
  </div>
</template>

<script setup>
const error = useError();
</script>

<style>
</style>