<template>
  <div>
    {{ posts }}
  </div>
</template>

<script setup>
  const {data: posts} = await useFetch('posts', {
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'post',
    body: {
      tittle: 'hey',
      body: 'hello world',
      userID: 1
    }
  })
</script>

<style>

</style>