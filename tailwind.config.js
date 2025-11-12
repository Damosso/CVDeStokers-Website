/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700',
          dark: '#FFC000',
        },
        'stokers-red': '#e31e24',
        'stokers-yellow': '#ffd700',
        'stokers-green': '#008800',
      },
    },
  },
  plugins: [],
} 