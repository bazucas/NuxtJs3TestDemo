<script setup>
  let userName
  if (process.client) {
    userName = prompt('What is your name?') // only works on the client side
  }

  // http://localhost:3001/query
  const { data : name } = await useFetch("/user/query-user", {
    server: false,
    method: 'post',
    query: {
      name: userName
    }
  })
</script>

<template>
  <div>
    <h1 v-if="name">You added the name: {{ name }}</h1>
  </div>
</template>
