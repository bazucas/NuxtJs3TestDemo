<script setup>
   
    // *Basic* native function from javascript, very limited, we need to take care of the promises, errors, callbacks, etc
    // calls twice this API both in the server and client
    // const toDo1 = await fetch('https://jsonplaceholder.typicode.com/todos/1') 
    
    // *Good* nuxtjs specific function, more advanced than fetch from js
    // calls twice this API both in the server and client
    // const toDo2 = await $fetch('https://jsonplaceholder.typicode.com/todos/1') 
        
     // *Great* Totally reactive and integrated with nuxt and vue with Composition API
    const {data: toDo, pending, error} = await useFetch('https://jsonplaceholder.typicode.com/todos/1');
</script>

<template>
  <div>
    {{ toDo }}
    <br><br>
  </div>
</template>