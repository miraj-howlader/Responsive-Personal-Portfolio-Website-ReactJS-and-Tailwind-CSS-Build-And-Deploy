/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode:"class",
    extend: {
      colors:{
        primary:'#f98e2b',
        secondary:'#f3f3f3'
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'2rem',
          md:'4rem',
          lg:'5rem',
          '2xl':'6rem'
        }
      }
    },
  },
  plugins: [],
}