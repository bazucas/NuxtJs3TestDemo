<script setup>
    const route = useRoute()
    const idInRoute = route.params.id
    console.log(route)
</script>

<template>
<div>
    <h1>ID: {{ idInRoute }}</h1>
    <h1>ID: {{ $route.params.id }}</h1>
</div>
</template>
