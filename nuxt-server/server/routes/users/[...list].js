export default defineEventHandler((event) => {
    
    // return event.context.params.list
    return getRouterParam(event, 'list')
    //localhost:3001/users/luis/sarah/john
    
})