/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'teko': ['Teko', 'sans-serif']
      },
      colors:{
        'primary':'#FF0037',
      }
    },
  },
  plugins: [],
}