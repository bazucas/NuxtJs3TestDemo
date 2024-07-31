<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <br>  
    <button @click="counter++">Increment</button>  

    <br><br>
    <NuxtLink to="/about">About page</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
    const counter = useCounter()

</script>

<style>

</style>