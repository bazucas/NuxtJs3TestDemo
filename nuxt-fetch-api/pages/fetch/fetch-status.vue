<script setup>
  const {data: product, pending, refresh, execute, error, status} = await useFetch(() => {
    return 'https://fakestoreapi.com/products/1'
  }, {
    immediate: false
  })

  console.log(status.value) // status => idle

  setTimeout(() => {
    execute()
    console.log(status.value) // status => pending

    setTimeout(() => {
      console.log(status.value) // status => success
      }, 3000)
    }, 3000)

</script>

<template>
  <div>

  </div>
</template>