<template>
    <div>
        {{  stocks }}
    </div>
</template>

<script setup>
    const { data: stocks } = await useFetch("/api/stocks")
</script>

<style lang="scss" scoped>

</style>