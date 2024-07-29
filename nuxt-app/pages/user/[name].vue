<template>
    <div>
        <!-- <NuxtLayout> -->
            <h1 class="text-2xl">{{ $route.params.name }}</h1>
        <!-- http://localhost:3001/user/luis -->
        <!-- </NuxtLayout> -->
         <!-- NuxtLayout not needed here because it's already in app.vue, if it was here
         it would show the custom.vue content twice         -->
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "custom"
    })
</script>

<style lang="scss" scoped>

</style>