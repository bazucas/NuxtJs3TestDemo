<script setup>
const {data: product, execute} = await useFetch('https://fakestoreapi.com/products/1', {
    pick: ["title"]
  })

</script>

<template>
  <div>
    <p>{{ product }}</p>
    <br>
    <button @click="execute">Fetch Data</button>
    <br><br>
  </div>
</template>

<style>

</style>
