/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '128':'32rem',
      },
      colors:{
      primary:'#404258',
      secondary:'#474e68',
      third:'#50577a',
      fourth:'#6b728e'
      },
    },
  },
  plugins: [],
}
