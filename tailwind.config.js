/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'teko': ['Teko', 'sans-serif'],
        'sans':['Open Sans', 'sans-serif']
      },
      colors:{
        'primary-blue':'#0D6EFD',
        'secondary-blue':'#0000cc',
      }
    },
  },
  plugins: [],
}