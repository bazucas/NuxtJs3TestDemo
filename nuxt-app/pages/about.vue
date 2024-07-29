<template>
    <div>
        <h1>About page</h1>
        <NuxtLink to="/">Home (NuxtLink)</NuxtLink> <br>
        <a href="/">Home (anchor)</a>
        <!-- <h1><NuxtLink to="/Users/1">users/1</NuxtLink></h1>    
        <h1><NuxtLink to="/Users/2">users/2</NuxtLink></h1>    
        <h1><NuxtLink to="/Users/3">users/3</NuxtLink></h1>    
        <h1><NuxtLink to="/Users/84">users/4</NuxtLink></h1>     -->
        <h1><a href="/users/1">users/1</a></h1>    
        <h1><a href="/users/2">users/2</a></h1>    
        <h1><a href="/users/3">users/3</a></h1>    
        <h1><a href="/users/84">users/4</a></h1>  
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