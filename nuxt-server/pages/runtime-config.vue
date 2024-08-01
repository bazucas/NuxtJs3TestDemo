<template>
    <div>
        <h1>{{ config.public.publicKey }}</h1>
        <h1>{{ config.secretKey }}</h1>

        <h1>{{ publicKey }}</h1>
        <h1>{{ secretKey }}</h1>
    </div>
</template>

<script setup>
    const config = useRuntimeConfig()
    console.log(config.public.publicKey) // will show here in client side, because it's public
    console.log(config.secretKey) // won't be visible here because it's accessible only server side

    const publicKey = config.public.publicKey
    const secretKey = config.secretKey
</script>

<style lang="scss" scoped>

</style>