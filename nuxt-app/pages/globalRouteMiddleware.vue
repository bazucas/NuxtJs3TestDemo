<!-- MIDDLEWARE -->
<script setup>
    definePageMeta({
            middleware: [            
                function(to, from) {
                    console.log("Inline middleware")
                },
                "another-middleware"
            ]
        })
</script>

<template>
    <div>
        <h1>Define Page Meta Middleware page</h1>        
        <NuxtLink to="/">HomePage</NuxtLink>
    </div>
</template>

<style lang="scss" scoped>

</style>

<!-- this vue page is unnecessary since global middleware will be called in all vue pages -->