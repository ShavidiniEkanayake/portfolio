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
        Cabinet: ['Cabinet']
      },
      colors: {
        darkmode: "#0D1117",
        textBlue: "#0b3558",
        lightBlue:"#006bff",
        bglightBlue: "#F4F8FF"
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}