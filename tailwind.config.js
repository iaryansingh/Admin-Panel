/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/index.html"], // Corrected the content array
  theme: {
    extend: {
      screens: {
        'sm': '500px',
        'md': '1200px',
        'lg': '1400px'
      },
    },
  },
  plugins: [],
}

