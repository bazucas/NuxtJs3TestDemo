<template>
  <div>
      <h1>Home Page</h1>
      <br>
      <!-- <h1>{{  data  }}</h1> -->
      <div v-html="data"></div>
  </div>
</template>

<script setup>
  const { data } = await useFetch("/api/hello")
</script>

