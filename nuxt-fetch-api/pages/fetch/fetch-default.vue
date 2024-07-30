<script setup>
const {data: product, execute} = await useFetch('https://fakestoreapi.com/products/1', {
  immediate: false,
  server: false,
  default: (product) => {
    product = "No data available"
    return product
  }
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
