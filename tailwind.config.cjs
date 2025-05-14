module.exports = {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1a202c',
        secondary: '#2d3748'
      }
    },
  },
  plugins: [],
}
