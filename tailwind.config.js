/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'teko': ['Teko', 'sans-serif'],
        'sans':['Open Sans', 'sans-serif']
      },
      colors:{
        'primary-blue':'#0D6EFD',
        'secondary-blue':'#0000cc',
        'primary-black': '#070707'
      },
      screens:{
        'extraSm': '375px',
        'mobile': '480px',
        'tablet': '769px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}