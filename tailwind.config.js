/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Onest", 'sans-serif'],
      },
      colors: {
        maincolor: {
          100: '#222a33',
          200: '#6cf5d7',
          300: '#1a1d22',
        },
        'main-color': '#222a33',
        'secondary-color': '#6cf5d7',
        'dark-color': '#1a1d22',
      }
    },
  },
  plugins: [],
}

