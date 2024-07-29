<template>
    <div>
      <LazyWelcome v-if="show"/>
      <button class="w-56 h-12 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300" 
      @click="show = !show">Show Welcome message
    </button>
    </div>
  </template>
  
  <script setup>
  const show = ref(false)
  </script>
  