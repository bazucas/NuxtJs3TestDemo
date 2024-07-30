<script setup>
const {data} = await useAsyncData('productsAndTodos', async () => { // 'productsAndTodos' -> unique key for the fetched data, if no key is given, nuxt will create random key
  const [products, categories, todos] = await Promise.all([
    $fetch('https://fakestoreapi.com/products'),
    $fetch('https://fakestoreapi.com/products/categories'),
    $fetch('https://jsonplaceholder.typicode.com/todos')
  ])
  return {products, categories, todos}
})

  console.log(data)
  const products = data.value.products
  const categories = data.value.categories
  const todos = data.value.todos
</script>

<template>
  <div>
    <p>{{ products }}</p>
    <br>
    <p>{{ categories }}</p>
    <br>
    <p>{{ todos }}</p>
    <br><br>
  </div>
</template>
