<script setup>
import { ref, onMounted } from 'vue';
import { useFetch } from '#app';

const id = ref(1);
const nuxtApp = useNuxtApp()

const { data: product } = await useFetch(() => `https://fakestoreapi.com/products/${id.value}`, {
  getCachedData: key => {
    return nuxtApp.payload.data
    [key] || nuxtApp.static.data
    [key]
  }
});


</script>

<template>
  <div>
    <p>{{ product }}</p>
    <NuxtLink to="/fetch/fetch-index">Index</NuxtLink>
    <br><br>
  </div>
</template>
