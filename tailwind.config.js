/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD450',
        secondary: '#0D121D',
        textcolor: '#0D121D',
      },
    },
  },
  plugins: [],
}