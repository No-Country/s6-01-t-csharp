/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "principal": "#01B1B0",
        "dark": "#176C6D"
      }
    },
    screens: {
      phone: '390px',
      computer: '1024px'
    },
    fontFamily: {
      'poppins': ['poppins', 'Georgia', 'sans']
    },
    margin: {
      '100%': '100%',
      '50%': '50%',
      '20%': '20%'
    },
    width: {
      '80vw': '60vw',
      '20%': '20%',
      '22%': '22%',
      '50%': '50%',
      '60%': '60%',
      '40%': '40%',
      '5%': '5%',
      '10%': '10%',
      '100%': '100%',
      '6': '1.5rem;',
      '70vw': '70vw',
    }
  },
  plugins: [],
}
