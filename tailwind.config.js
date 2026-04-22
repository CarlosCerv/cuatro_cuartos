/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        'cream-deep': '#E7DED1',
        coal: '#1C1A17',
        moss: '#3D4A3E',
        terracotta: '#8B5E52',
        sand: '#D6C6B5',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(28, 26, 23, 0.12)',
      },
      letterSpacing: {
        editorial: '0.28em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
