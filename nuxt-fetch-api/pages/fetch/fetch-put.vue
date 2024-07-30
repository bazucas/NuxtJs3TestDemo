<template>
  <div>
    {{ posts }}
  </div>
</template>

<script setup>
  const {data: posts} = await useFetch('posts/1', {
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'put',
    body: {
      tittle: 'updated',
      body: 'updating post with id 1',
      userID: 1
    }
  })
</script>


<style>

</style>