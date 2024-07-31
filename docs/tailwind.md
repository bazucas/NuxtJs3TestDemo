npm install vite@latest
npm install nuxt@latest
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest sass
npx tailwindcss init


<!-- tailwind.config.js -->

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}




<!-- assets/scss/_variables.scss -->

$primary-color: #3490dc;



% assets/scss/main.scss

@import "variables";

.footer-min-h {
  min-height: calc(100vh - 40px);
}


% assets/css/tailwind.css

@tailwind base;
@tailwind components;
@tailwind utilities;


