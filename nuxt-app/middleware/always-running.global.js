export default defineNuxtRouteMiddleware((to, from) => {
    console.log("This code will run before navigating to the about route")
})
// WARNING: This code will always run between route navigations
