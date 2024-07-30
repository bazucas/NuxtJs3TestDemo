<script setup>
import { ref, onMounted } from 'vue';
import { useFetch } from '#app';

const id = ref(1);
const nuxtApp = useNuxtApp()

const { data: product } = await useFetch(() => `https://fakestoreapi.com/products/${id.value}`, {
  // The getCachedData function checks for cached data before making a new API request.
  // It tries to retrieve data from two sources:
  // 1. nuxtApp.payload.data: This contains data that was injected into the client
  //    during the server-side rendering process. This data might include pre-fetched
  //    API responses that were provided during SSR to avoid duplicate requests on the client.
  // 2. nuxtApp.static.data: This contains static data generated at build time
  //    for static sites. This data is pre-fetched and included in the static site output,
  //    ensuring that the data does not change between builds.
  getCachedData: key => {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
  }
});


</script>

<template>
  <div>
    <p class="mb-5">{{ product }}</p>
    <NuxtLink class="btn-teste" to="/fetch/fetch-index">Index</NuxtLink>
    <br><br>
  </div>
</template>
