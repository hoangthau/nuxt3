<template>
  Intro page
  <pre>{{  data?.[0] }}</pre>
</template>
<script setup lang="ts">
const { data } = await useFetch<number[]>('http://www.randomnumberapi.com/api/v1.0/random');
</script>