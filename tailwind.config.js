/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'rgba(255, 255, 255, 0.18)',
        secondary: 'rgba(255, 255, 255, 0.15)',
        dotfill: '#343FA3'
      }
    },
  },
  plugins: [],
}
