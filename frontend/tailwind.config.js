/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brown: '#504128',
        cream: '#fdf6ea',
        yellow: '#FF8C00',
        white: '#FAF6F6',

      },
      animation: {
        marquee: 'marquee 21s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },

    },
  },
  plugins: [],
}