<template>
    <div>
      <h1>Home Page</h1>
      <br>
      <div>{{ response.greeting }}</div>
      <div>{{ response.content }}</div>
    </div>
  </template>
  
  <script setup>
    import { ref, onMounted } from 'vue'
    import DOMPurify from 'dompurify'
    import { useFetch } from '#imports'
  
    const sanitizedData = ref('')
  
    const { data: response, refresh } = useFetch("/api/greeting")
  </script>
  