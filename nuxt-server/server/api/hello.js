let counter = 0

export default defineEventHandler((event) => {
    counter++
    return `
    <H1>Hello world!</H1>
    <script>alert("You've been Hacked!!!")</script>
    <br>
    ${counter}
    `
})