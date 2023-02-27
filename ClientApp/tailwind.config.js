/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#01B1B0",
        secondary: "#541440",
        alterno: "#176C6D",
        textLight: "#FCFBFE",
        textDark: "#11111",
        "principal": "#01B1B0",
        "dark": "#176C6D",
        "bgCard": "rgba(255, 255, 255, 1)",
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
      },
      backgroundImage: {
        'back': "url('../src/assets/images/Rectangle-34.png')"
      },
      backgroundPosition: {
        leften: 'center 30% ',
      }
      
    },

    
    },
    
    plugins: [
      plugin(function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            "bg-gradient": (angle) => ({
              "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
            }),
          },
          {
            // values from config and defaults you wish to use most
            values: Object.assign(
              theme("bgGradientDeg", {}), // name of config key. Must be unique
              {
                10: "10deg", // bg-gradient-10
                157: "157.31deg",
              }
            ),
          }
        );
      }),
    ],
  }
  
  

