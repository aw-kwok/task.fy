/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fffafa",
        secondary: "#eff3ff",
        button: "#4c6bda",
        footer: "#172248",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit"],
        roboto: ["Roboto"],
      },
      animation: {
        fadeUp: 'fadeUp 0.5s',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: `translateY(30px) scale(0.9)`},
          '100%': { opacity: 100, transform: `translateY(0px) scale(1)`},
        }
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};