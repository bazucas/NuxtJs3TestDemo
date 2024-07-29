<template>
    <div>
        <h1>This is a Home page</h1>     
        <NuxtLink to="/about">About (NuxtLink)</NuxtLink> <br>
        <a href="/about">About (anchor)</a>
        <h1><NuxtLink :to="`/greeting/${name}`">See your greeting</NuxtLink></h1>    
        <h1><NuxtLink to="/PageMetaMiddleware/">PageMeta</NuxtLink></h1>    
        <h1><NuxtLink to="/NuxtRouteMiddleware/">NuxtRoute</NuxtLink></h1>    
        <h1><NuxtLink to="/GlobalRouteMiddleware/">GlobalRoute</NuxtLink></h1>    
    </div>
</template>

<script setup>
let name 
if (import.meta.client) {
    //name = prompt("Enter your name")
}
</script>


<style lang="scss" scoped>

</style>