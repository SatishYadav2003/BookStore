/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens:{
        'res-len':'1400px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}