export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig(event)
    const {secretKey, api} = config
    console.log(secretKey)
    console.log(api)
})