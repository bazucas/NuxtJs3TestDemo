<script setup>
  const {data: product, refresh} = await useFetch('https://fakestoreapi.com/products/1')

  const fetchData = () => {
    const interval = setInterval(async () => {
      await refresh()
      console.log(product.value)
    }, 1)

    setTimeout(() => {
      clearInterval(interval)
    }, 2000)
  }
</script>


<template>
    <div>
        <button @click="fetchData">Get Product</button>
        <p>{{ product  }}</p>
    </div>
</template>
