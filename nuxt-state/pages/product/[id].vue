<script setup>
const route = useRoute()
const id = route.params.id
// const {data: product} = await useFetch(`https://fakestoreapi.com/products/${id}`)
const {data: product} = await useFetch(`https://fakestoreapi.com/productss/${id}`) // bad URL

// if(!product.value) {
//     throw createError({ // custom error throw
//         statusCode: 404,
//         message: "Product not found!!!"
//     })
//}
</script>

<template>
  <div>
    <p v-if="error">{{ error }}</p>
    <p v-else>{{ product }}</p>
  </div>
</template>
