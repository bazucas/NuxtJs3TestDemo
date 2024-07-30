<script setup>
const {data: product, status} = await useFetch('https://fakestoreapi.com/products/1', {
  lazy: true, // for the differed execution on the client side 
  server: false  // the server must be disabled for this call, or the server will do the request itself
  })

  console.log("Status", status)
  console.log("Status", status.value)
</script>

<template>
  <div>
    <h1 v-if="status === 'pending'"> Loading...</h1>
    <p v-else>{{ product }}</p>
    <br><br>
  </div>
</template>

<style>

</style>
