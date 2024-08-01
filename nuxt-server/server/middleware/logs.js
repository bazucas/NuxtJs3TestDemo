export default defineEventHandler((event) => {
    console.log(`New request ${
        getRequestURL(event)}`) // see server console
})