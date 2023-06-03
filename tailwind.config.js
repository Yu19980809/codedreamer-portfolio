/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E4CE1B',
        purple: '#BC2AD7',
        white: '#ECEEEF',
        dimWhite: 'rgba(236, 238, 239, .7)',
        black: {
          500: '#353E43',
          900: '#02080B'
        }
      }
    },
  },
  plugins: [],
}

