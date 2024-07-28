<template>
    <div>
        <h1>Good morning {{ name }}</h1>
        <!-- http://localhost:3000/greeting/luis -->
    </div>
</template>

<script setup>
    const route = useRoute()
    const{name} = route.params
</script>