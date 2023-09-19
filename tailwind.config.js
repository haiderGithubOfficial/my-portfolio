/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes: {
        'trans-y': {
          '25%': { transform: 'translateY(200px) scaleY(0.8)', opacity: 1 },
          '50%': { transform: 'translateY(400px) scaleY(1)', opacity: 0.8 },
          '75%': { transform: 'translateY(200px) scaleY(0.8)', opacity: 1 },
          '100%': { transform: 'translateY(0px) scaleY(1)', opacity: 0.8 }
        },
        'trans-y-short': {
          '25%': { transform: 'translateY(-50px) scaleY(0.9)', opacity: 1 },
          '50%': { transform: 'translateY(0px) scaleY(1)', opacity: 0.8 },
          '75%': { transform: 'translateY(50px) scaleY(0.9)', opacity: 1 },
          '100%': { transform: 'translateY(0px) scaleY(1)', opacity: 0.8 }
        },
        'rotate-y': {
          '25%': { transform: 'rotateY(90deg)', opacity: 1 },
          '50%': { transform: 'rotateY(180deg)', opacity: 0.8 },
          '75%': { transform: 'rotateY(270deg)', opacity: 1 },
          '100%': { transform: 'rotateY(360deg)', opacity: 0.8 }
        }
      },
      animation: {
        'trans-y': 'trans-y 20s linear infinite',
        'trans-y-short': 'trans-y-short 10s linear infinite',
        'rotate-y': 'rotate-y 3s linear 2'
      },
      colors: {
        "gray-dark": "#151515",
        "green-teal": "#4EE1A0",
        "gray-light": "#242424",
        "gray-lighter": "#d9d9d9cf",
        "white": "#FFFFFF",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
