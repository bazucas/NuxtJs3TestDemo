export default defineEventHandler(async(event) => {
    
    // http://localhost:3001/user/rec-user

    const body = await readBody(event)
    const name = body.name

    return name
})