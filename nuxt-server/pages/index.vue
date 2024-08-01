<template>
  <div>
    <h1>Home Page</h1>
    <br>
    <div v-html="sanitizedData"></div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import DOMPurify from 'dompurify'
  import { useFetch } from '#imports'

  const sanitizedData = ref('')

  const { data: responseData, refresh } = useFetch("/api/hello")

  // Watch for changes in responseData or refresh to fetch new data
  onMounted(() => {
    if (responseData.value) {
      sanitizedData.value = DOMPurify.sanitize(responseData.value, { USE_PROFILES: { html: true } })
    }
  })
</script>
