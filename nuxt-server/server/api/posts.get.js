export default defineEventHandler(() => {
    const posts = [
        {id: 1, title: "Nuxt Intro"},
        {id: 2, title: "Vue Intro"},
        {id: 3, title: "React Intro"}
    ]

    return posts
})