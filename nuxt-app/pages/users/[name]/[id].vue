<script setup>
    const route = useRoute()
    const name = route.params.name
    const id = route.params.id
</script>

<template>
    <div>
        <h1>NAME: {{ name }}</h1>
        <h1>ID: {{ id }}</h1>
        <!-- http://localhost:3000/users/Luis/2024 -->
    </div>
</template>