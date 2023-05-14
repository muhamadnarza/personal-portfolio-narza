/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*{html,js}'],
  darkMode: 'class',
  theme: {
    container: {
        center: true,
        padding: '16px',
    },
    extend: {
      colors: {
        primary : '#14b8a6',
        danger : '#b91c1c',
        valid : '##15803d',
        secondary : '#64748b',
        dark : '#0f172a',
      },
      screen: {
        '2xl' : '1520px'
      },
    },
  },
  plugins: [],
}

