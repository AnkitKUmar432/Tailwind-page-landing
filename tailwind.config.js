/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'primary':'#3238f2',
        
      },
      fontFamily:{
        'display':['Inter','sans-serif'],
        'body':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

