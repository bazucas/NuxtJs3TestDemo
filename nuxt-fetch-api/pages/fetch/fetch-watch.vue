<script setup>
import { ref, onMounted } from 'vue';
import { useFetch } from '#app';

const id = ref(1);

// The `watch` option can be used to specify dependencies that will trigger a re-fetch when they change.
// Setting it to an empty array or `false` effectively disables automatic re-fetching based on response changes,
// allowing us to manually control when to refresh the data.
const { data: product, refresh } = await useFetch(() => `https://fakestoreapi.com/products/${id.value}`, {
  watch: [], // by default the watch will be [], set to false to disable automatic response watching and refreshing
});

// Ensure setInterval runs only on the client-side
if (!import.meta.env.SSR) {
  onMounted(() => {
    setInterval(() => {
      id.value++;
      //refresh(); // this does the same as watch, it will automatically trigger the automatic response watching and refreshing
    }, 1000);
  });
}

</script>

<template>
  <div>
    <p>{{ product }}</p>
    <br><br>
  </div>
</template>
