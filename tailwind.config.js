/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'teko': ['Teko', 'sans-serif'],
        'sans':['Open Sans', 'sans-serif'],
        'bold':['Open Sans', 'sans-serif']
      },
      colors:{
        'primary-blue':'#0D6EFD',
        'secondary-blue':'#0000cc',
        'primary-black': '#070707'
      },
      screens:{
        'extraSm': '382px',
        'mobile': '480px',
        'mobileLg': '600px',
        'tablet': '769px',
      },
      gridTemplateColumns:{
        'twoCols': 'repeat(2, minmax(0, 300px))',
        'threeCols': 'repeat(3, minmax(0, 300px))',
        'fourCols': 'repeat(4, minmax(0, 300px))',
        'fiveCols': 'repeat(5, minmax(0, 300px))',
        'sevenCols': 'repeat(7, minmax(0, 300px))'

      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}