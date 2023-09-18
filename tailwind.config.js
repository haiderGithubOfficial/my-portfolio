/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gray-dark": "#151515",
        "green-teal": "#4EE1A0",
        "gray-light": "#242424",
        "gray-lighter": "#d9d9d9cf",
        white: "#FFFFFF",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
