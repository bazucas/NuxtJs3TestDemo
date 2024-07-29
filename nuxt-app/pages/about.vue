<template>
    <div>
        <h1>About page</h1>
        <NuxtLink to="/">Home (NuxtLink)</NuxtLink> <br>
        <a href="/">Home (anchor)</a>
    </div>
</template>

<script setup>
        definePageMeta({
        middleware: [            
            function(to, from) {
                console.log("Inline middleware")
            },
            "another-middleware",
        ]
    })
</script>

<style lang="scss" scoped>

</style>