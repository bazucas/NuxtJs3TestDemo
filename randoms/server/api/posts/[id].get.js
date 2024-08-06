export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')
    const {id2} = getQuery(event)
    const url = `https://jsonplaceholder.typicode.com/posts/${id2}`
    const data = await $fetch(url)
    return data
})