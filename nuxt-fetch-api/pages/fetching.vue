<template>
    <div>
        {{  products }}
        <br><br>
        <button @click="fetchProduct">Display new product</button>
    </div>
  </template>
  
  <script setup>
  const id = ref(1)
  // const {data: products} = await useFetch(`https://fakestoreapi.com/products/${id}`);
  
  // The following line doesn't work because of closure, as the variable is stored globally
  // const {data: products, refresh} = await useFetch(`https://fakestoreapi.com/products/${id.value}`);
  
  // The solution is to use a function to return the URL, so the variable is evaluated dynamically
  const { data: products, refresh } = await useFetch(() => `https://fakestoreapi.com/products/${id.value}`);
    console.log(products.value)

    const fetchProduct = async() => {
        ++id.value
        console.log("ID 👌👌")
        console.log(id.value)
        await refresh()
        console.log(products.value)
    }

  </script>
  

  <style lang="scss" scoped>
  
  </style>
   