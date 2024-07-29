<template>
    <div>
      <h1>This is a Home page</h1>
      <NuxtLink to="/about">About (NuxtLink)</NuxtLink> <br>
      <a href="/about">About (anchor)</a>
      <h1><NuxtLink :to="`/greeting/${name}`">See your greeting</NuxtLink></h1>
      <h1><NuxtLink to="/PageMetaMiddleware/">PageMeta</NuxtLink></h1>
      <h1><NuxtLink to="/NuxtRouteMiddleware/">NuxtRoute</NuxtLink></h1>
      <h1><NuxtLink to="/GlobalRouteMiddleware/">GlobalRoute</NuxtLink></h1>
      
      <br>
      <button 
        class="mb-5 w-48 h-12 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
        @click="toggleLayout">
        {{ toBePickedLayout + ' Layout' }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  let name 
  if (import.meta.client) {
      //name = prompt("Enter your name")
  }
  
  const pickedLayout = ref("default")
  const toBePickedLayout = ref("custom")
  
  const toggleLayout = () => {
    if (pickedLayout.value === "custom") {
      setPageLayout('default')
      pickedLayout.value = "default"
      toBePickedLayout.value = "custom"
    } else {
      setPageLayout('custom')
      pickedLayout.value = "custom"
      toBePickedLayout.value = "default"
    }
  }
  </script>
  
  <style lang="scss" scoped>

</style>
  