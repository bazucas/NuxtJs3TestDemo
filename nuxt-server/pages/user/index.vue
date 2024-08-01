<script setup>
  let userName
  if (process.client) {
    userName = prompt('What is your name?') // only works on the client side
  }

  const { data : name } = await useFetch("/user/rec-user", {
    server: false,
    method: 'post',
    body: {
      name: userName
    }
  })
</script>

<template>
  <div>
    <h1 v-if="name">You added the name: {{ name }}</h1>
  </div>
</template>
