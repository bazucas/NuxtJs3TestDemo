<template>
    <div>
        {{  products }}
    </div>
  </template>
  
  <script setup>
    const {data: products} = await useFetch('https://fakestoreapi.com/products') // {data: products} -> destructuring + new name assign
    console.log(products.value)
  </script>
  

  <style lang="scss" scoped>
  
  </style>
   