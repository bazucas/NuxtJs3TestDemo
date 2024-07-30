<script setup>
  const {data: product} = await useFetch('https://fakestoreapi.com/products/1', {
    server: false // this flag will disable nuxt's server side to send the page content without the API call, this will be done in the client side
  })
  console.log(product)
</script>

<template>
  <div>
    {{ product }}
    <br><br>
  </div>
</template>


<style>

</style>