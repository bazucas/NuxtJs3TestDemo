<script setup>
    const words = useRoute().params.words
</script>

<template>
<div>
    <h1>{{ words }}</h1>
    <!-- http://localhost:3000/hey/guys/have/a/nice/day -->
</div>
</template>