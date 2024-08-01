<template>
    <div>
      <label>Email address</label>
      <br>
      <input type="email" v-model="email" />
      <br>
      <label>Password</label>
      <br>
      <input type="password" v-model="password" />
      <br>
      <label>User Name</label>
      <br>
      <input type="text" v-model="userName" />
      <br>
      <label>Address</label>
      <br>
      <input type="text" v-model="address" />
      <br>
      <br>

      <button class="btn-default" @click="signUp">Register</button>

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
    const userName = ref('')
    const address = ref('')
    const successMsg = ref('')
    const errorMsg = ref('')

    if (user.value) await navigateTo("/")

    const signUp = async () => {
        const { data, error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
            options: { 
                data: {
                    full_name: userName.value,
                    address: address.value
                },
                emailRedirectTo: "http://localhost:3001"
            }
        })

        if (error) {
            successMsg.value = null
            successMsg.value = error.message
            return
        }

        errorMsg.value = null
        successMsg.value = "Redirecting..."
        setTimeout(async () => {
            successMsg.value = null
            await navigateTo("/confirm")
        }, 2000)
    }
</script>

<style lang="scss" scoped>

</style>