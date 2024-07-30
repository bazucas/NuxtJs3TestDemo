<script setup>
  const {data: product, pending, refresh, execute, error, status} = await useFetch(() => {
    return 'https://fakestoreapi.com/productss/1' // bad Url, will show message
  })

</script>

<template>
  <div>
    <p v-if="error">{{ error }}</p>
    <p v-else>{{ product }}</p>
    <br><br>
  </div>
</template>