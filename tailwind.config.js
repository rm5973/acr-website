/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:  {
    'gokart-image':'url("./images/gokart.jpg")'
    },
    },
  },
  plugins: [],
}

