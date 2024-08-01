<script setup>
  const counter = ref(1)
</script>

<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <button @click="counter++">+</button>
  </div>
</template>
