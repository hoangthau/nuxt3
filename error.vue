<template>
  <div>
    <p>Error {{ error.statusCode }}</p>
    <span>fix1</span>
    <span>fix2</span>
    <span>fix3</span>
  </div>
  <div>
    test1
  </div>
</template>

<script setup>
const error = useError();
const a = 1;
</script>

<style>
</style>