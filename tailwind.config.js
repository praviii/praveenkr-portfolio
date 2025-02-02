/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'selector',
  theme: {
    extend: {
      colors:{
        primarColor:"#5EEAD4",
        gray:'#ABB2BF',
        white:'#FFFFFF'
      }
    },
  },
  plugins: [require('tailwindcss-motion')], 
}

