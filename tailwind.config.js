/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'

  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: '#1DB954',
          black: '#000',
          withe: '#FFFF',
          gray: '#121212',
          darkgray: '#0F0F0F',
          lightgray: '#282828'
        }
      }
    }
  },
  plugins: []
}
