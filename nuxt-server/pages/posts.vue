<script setup>

const result = ref(null)

const getPosts = async () => {
  const {data} = await useFetch('/api/posts')
  result.value = data
}

  const addPost = async () => {
    const {data} = await useFetch('/api/posts', {
      method: 'post',
      body: {
        newPost: {
          id: 4,
          title: 'This is new post'
        }
      }
    })

    result.value = data
  }

  const editPost = async () => {
    const {data} = await useFetch('/api/posts', {
        method: 'put',
        body: {
        title: 'Creating a social media app using Nuxt'
        }
    })
    result.value = data
  }

  const deletePost = async () => {
    const {data} = await useFetch('/api/posts', {
        method: 'delete'
    })
    result.value = data
  }

</script>

<template>
    <div>
      <button class="btn-default m-5" @click="getPosts">Get posts</button>
      <button class="btn-default m-5" @click="addPost">Add a post</button>
      <button class="btn-default m-5" @click="editPost">Edit a post</button>
      <button class="btn-default m-5" @click="deletePost">Delete a post</button>
      <h1 class="m-5">{{ result }}</h1>
    </div>
  </template>
  