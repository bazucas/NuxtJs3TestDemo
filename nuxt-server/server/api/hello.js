export default defineEventHandler((event) => {
    return `
    <H1>Hello world!</H1>
    <script>alert("You've been Hacked!!!")</script>
    `
})