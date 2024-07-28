<script setup>
    const route = useRoute()
    const adminName = route.params.name
    const adminId = route.params.id
</script>

<template>
    <div>
        <h1>ADMIN NAME: {{ adminName }}</h1>
        <h1>ADMIN ID: {{ adminId }}</h1>
        <!-- http://localhost:3000/admins-Luis/2024 -->
    </div>
</template>