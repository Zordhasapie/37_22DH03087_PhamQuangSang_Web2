/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'riot-hover': '#4e7f86',
        'riot-blur': '#76c7d5'
      },
      scale: {
        '115': '1.15'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],
}

