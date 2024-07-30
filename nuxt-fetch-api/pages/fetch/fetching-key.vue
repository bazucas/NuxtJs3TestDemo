<template>
    <div>
        Products: {{  products }}
    </div>
  </template>
  
  <script setup>
  const id = ref(1)
 
// The key is used to uniquely identify this fetch request. This ensures that the data associated with this specific fetch can be cached and tracked independently.
// By providing a unique key, such as "product" in this case, we can manage the cache more effectively,
// avoid conflicts with other fetch requests, and selectively refresh or invalidate this specific fetch's data if needed.
const { data: products, refresh } = await useFetch(() => `https://fakestoreapi.com/products/${id.value}`, { key: "product" });

    console.log(products.value)

  </script>
  

  <style lang="scss" scoped>
  
  </style>
   