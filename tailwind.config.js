/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pink: '#e30347',
        brown: '#75624D',
        lightbrown: '#cfcfcf',
      },
      fontSize: {
        'xs': '0.6rem', 
      },
    },
  },
  plugins: [],
}

