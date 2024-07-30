<script setup>
  const id = ref(1)
  const {data: product} = await useFetch(() => `https://fakestoreapi.com/products/1`, {
    watch: [id], // in this case we have to pass id in the watch array because the useFetch Url is not being updated
    transform: (product) => { // this is to be able to show something on the console
      console.log(product) // see console log, the json object won't change it will be always products/1
      return product
    }
  })

  const incrementID = () => {
    id.value++
  }
</script>

<template>
  <div>
    <p>{{ product }}</p>
    <br>
    <button @click="incrementID">Refetch</button>
    <br><br>
  </div>
</template>
