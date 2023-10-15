<template>
  <div>
    <p>Error {{ error.statusCode }}</p>
  </div>
</template>

<script setup>
const error = useError();
</script>

<style>
</style>