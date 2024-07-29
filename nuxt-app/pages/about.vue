<template>
    <div>
        <h1>About page</h1>
        <NuxtLink to="/">Home (NuxtLink)</NuxtLink> <br>
        <a href="/">Home (anchor)</a>
        <h1><a href="/users/1">users/1</a></h1>    
        <h1><a href="/users/2">users/2</a></h1>    
        <h1><a href="/users/3">users/3</a></h1>    
        <h1><a href="/users/84">users/4</a></h1> 
        <br>
        <h1 class="text-xl animate__animated animate__bounce">Hello World</h1>
        <br>
        <h1 class="text-xl animate-bounce">Hello World</h1>  
    </div>
</template>

<script setup>
        definePageMeta({
        middleware: [            
            function(to, from) {
                console.log("Inline middleware")
            },
            "another-middleware",
        ],
        layout: false // disables all layouts for this page
    })
</script>

<style lang="css" scoped>
    h1{
      color:red; /* this will only affect globally because we removed scoped */
    } 

</style>