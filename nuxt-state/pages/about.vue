<script setup>
const counter = useCounter()
</script>

<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <button @click="counter++">Increment</button>
    <br><br>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>
