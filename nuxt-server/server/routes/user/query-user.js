export default defineEventHandler((event) => {
    
    // http://localhost:3001/user/query-user?name=toze
    
    const body = getQuery(event)
    const name = body.name

    return name
})