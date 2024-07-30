<script setup>
// refresh/execute: a function that can be used to refresh the data returned by the handler function.
const {data: product, execute} = await useFetch('https://fakestoreapi.com/products/1', {
  immediate: false // immediate: when set to false, will prevent the request from firing immediately. (defaults to true)
  })

</script>

<template>
  <div>
    <p>{{ product }}</p>
    <button @click="execute">Fetch Data</button>
    <br><br>
  </div>
</template>

<style>

</style>
