export default defineEventHandler(async(event) => {
    const posts = [
        {id: 1, title: "Nuxt Intro"},
        {id: 2, title: "Vue Intro"},
        {id: 3, title: "React Intro"}
    ]

    const body = await readBody(event)
    posts.push(body.newPost)
    return posts
})