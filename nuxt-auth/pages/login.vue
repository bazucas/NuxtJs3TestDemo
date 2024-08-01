<template>
    <div>
      <br>
      <label for="email">Email Address</label>
      <br>
      <input id="email" type="email" v-model="email"/>
      <br>
      <label for="password">Password</label>
      <br>
      <input id="password" type="password" v-model="password"/>
      <br>
      <button class="btn-default mt-5" @click="login">Login</button>
      <br>
      <br>

      <button class="btn-default mt-5" @click="googleLogin">Login with Google</button>
      <br>
      <br>

      <button class="btn-default mt-5" @click="githubLogin">Login with Github</button>
      <br>

      <div v-if="successMsg">
        <h1>{{ successMsg }}</h1>
      </div>
      <div v-if="errorMsg">
        <h1>{{ errorMsg }}</h1>
      </div>
    </div>
  </template>
  
  <script setup>

  const supabase = useSupabaseClient()
  const user = useSupabaseUser()
  const email = ref('')
  const password = ref('')
  const successMsg = ref('')
  const errorMsg = ref('')
  
  if (user.value) await navigateTo('/logout')
  
  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
  
    if (error) {
      errorMsg.value = error.message
      successMsg.value = ''
      return
    }
  
    errorMsg.value = ''
    successMsg.value = "Welcome back, Redirecting..."
    setTimeout(async () => {
      successMsg.value = ''
      await navigateTo("/")
    }, 2000)
  }

  const googleLogin = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
    
    if (error) {
      errorMsg.value = error.message
      successMsg.value = ''
      return
    }

    errorMsg.value = ''
    successMsg.value = "Redirecting..."

    setTimeout(async () => {
      successMsg.value = ''
      await navigateTo("/")
    }, 2000)
  }

  const githubLogin = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider: 'github'
    })
    
    if (error) {
      errorMsg.value = error.message
      successMsg.value = ''
      return
    }

    errorMsg.value = ''
    successMsg.value = "Redirecting..."

    setTimeout(async () => {
      successMsg.value = ''
      await navigateTo("/")
    }, 2000)
  }

  </script>
  
  <style lang="scss" scoped>

</style>
  