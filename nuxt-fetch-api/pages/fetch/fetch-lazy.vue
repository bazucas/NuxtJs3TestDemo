<script setup>
import { ref, watchEffect } from 'vue';
import { useFetch } from '#app';

const loading = ref(true);
const error = ref(null);
const { data: products, refresh } = useFetch(() => `https://fakestoreapi.com/products/1`, { lazy: true });

watchEffect(() => {
  if (products.value) {
    loading.value = false;
  }
  if (error.value) {
    loading.value = false;
  }
});
</script>

<template>
  <div>
    <h1 v-if="loading">Loading...</h1>
    <p v-else>{{ products }}</p>
    <br><br>
  </div>
</template>

<style scoped>

</style>
