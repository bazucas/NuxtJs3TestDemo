<script setup>
  const {data: product} = await useFetch(() => {
    return 'https://fakestoreapi.com/products/1'
  }, {
    deep: false, // by default deep is TRUE and will detect changes and update the template
    server: false
  })

  // see MutableReactiveHandler in nuxt-devtools in chrome dev tools console
  const changeRating = () => {
    console.log("PRODUCT VALUE: ", product.value)

    //product.value.rating.rate = "some rate" // DOM won't react to these changes because of deep change and deep prop is false (above) 
    product.value = {
      name: "Test" // this will trigger DOM change even if deep: false, because we are changing product, and product is in the first object layer
    }
  }
</script>

<template>
  <div>
    <p class="mb-5">{{ product }}</p>
    <br>
    <button class="btn-teste" @click="changeRating">Change rating</button>
    <br><br>
  </div>
</template>