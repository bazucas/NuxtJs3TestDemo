<script setup>
    definePageMeta({
        middleware: [
            'denyLuis'
        ]
    })
</script>

<template>
    <div>
        <h1>{{ $route.params.name }}</h1>
    </div>
</template>