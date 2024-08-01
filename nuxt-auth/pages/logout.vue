<template>
    <div>
      <button class="mt-5 btn-default" @click="logout">Logout</button>
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
    const successMsg = useState(() => false)
    const errorMsg = useState(() => false)

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            errorMsg.value = error.message;
            return;
        }

        successMsg.value = 'Hope to see you again soon, Redirecting...';
        setTimeout(async () => {
            successMsg.value = null;
            await navigateTo('/');
        }, 2000);
    }

    // this forces the user to login, the idea is to prevent the user to navigate to the rest of the website
    definePageMeta({
        middleware: [
            async () => {
                const user = useSupabaseUser()
                if(!user.value) return await navigateTo("/login")
            }
        ]
    })

</script>

<style lang="scss" scoped>

</style>