/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,otf}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        Satoshi: ['Satoshi'],
        SatoshiI:['SatoshiI']
      },
      colors: {
        darkmode: "#0D1117",
        orange: "#FF2E00",
        bgorange: "#FFF7F5"
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}