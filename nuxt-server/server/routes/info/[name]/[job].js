export default defineEventHandler((event) => {
    
    // const name = event.context.params.name
    const name = getRouterParam(event, 'name')
    //const job = event.context.params.job
    const job = getRouterParam(event, 'job')

    return {name, job}
    //localhost:3001/info/luis/engineer
})