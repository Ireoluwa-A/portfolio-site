/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind.config.js
  //prefix: 'tw-',
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'WorkSans': ['"Work Sans"', 'sans-serif'],
      'Lato': ['Lato', 'sans-serif'],
      'Nunito': ['Nunito', 'sans-serif']
    },

    extend: {
    },

    animation:{
      spin: 'spin 6s linear infinite',
      // fade_in_left: 'fade_in_left 1.3s',
      fade_in_left: 'fade_in_left 0.6s',
      fade_in_left_slow: 'fade_in_left 1.2s',
      fade_in_up: 'fade_in_up 0.5s ease-in',
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
      fade_in_up: {
        '0%': {opacity:'0', transform: 'translateY(40px)'},
        '100%': {opacity: '1', transform: 'translateY(0)'}
      },
      enlarge: {
        '0%': {transform: 'scale(0)'},
        '100%': {transform: 'scale(0)'},
      },
    },
  },
  plugins: [],
}
