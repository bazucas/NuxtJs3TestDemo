<template>
  <div>
    {{ posts }}
  </div>
</template>

<script setup>
  const {data: posts} = await useFetch('posts/1', {
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'patch',
    body: {
      title: 'patched',
    }
  })
</script>


<style>

</style>