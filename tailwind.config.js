/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind.config.js
  //prefix: 'tw-',
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'WorkSans': ['"Work Sans"', 'sans-serif']
    },

    extend: {
    },

    animation:{
      spin: 'spin 6s linear infinite',
      fade_in_left: 'fade_in_left 1.3s',
      fade_in_right: 'fade_in_right 0.8s',
      enlarge: 'enlarge .3s ease',
    },
    keyframes: {
      fade_in_left: {
        '0%': {opacity:'0', transform: 'translateX(-100px)'},
        '100%': {opacity: '1', transform: 'translateX(0)'}
      },
      fade_in_right: {
        '0%': {opacity:'0', transform: 'translateX(80px)'},
        '100%': {opacity: '1', transform: 'translateX(0)'}
      },
      enlarge: {
        '0%': {transform: 'scale(0)'},
        '100%': {transform: 'scale(0)'},
      },
    },
  },
  plugins: [],
}
