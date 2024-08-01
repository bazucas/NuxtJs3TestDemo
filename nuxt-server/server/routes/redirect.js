export default defineEventHandler(async (event) => {
    await sendRedirect(event, "/about")
})