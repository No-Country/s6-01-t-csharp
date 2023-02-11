/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#01B1B0",
        textLight: "#FCFBFE",
        textDark: "#11111",
      },
    },
  },
  plugins: [],
}
