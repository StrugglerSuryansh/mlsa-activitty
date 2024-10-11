/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // primary:'#f97432',
        primary:'#1f385e',
        // secondary: '#ffac4a',
        secondary: '#255e9a',
        background:'#F5F5DC',
        tertiary:'#255e9a',
        c1:'#def3ff',
        c2:'#334a72'
      },
      backgroundImage:{
        'img':"url('src/images/backgroundImage.png')",
      },
      fontFamily:{
        'primary':'Edu AU VIC WA NT Dots'
      }
    },
  },
  plugins: [],
}