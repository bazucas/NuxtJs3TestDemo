<script setup>
    defineProps(['error'])

    const handleError = () => {
        clearError({
            redirect: "/" // redirects to home page if clear error button is clicked
        })
    }
</script>

<template>
  <div>
    <h1>Errrooooorrr 👉 {{ error.statuscode }}</h1>
    <h1>{{ error.message }}</h1>
    <button @click="handleError">Clear Error</button>
  </div>
</template>
