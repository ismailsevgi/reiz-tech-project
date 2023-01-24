/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        toDark: 'toDark 1s ease 1',
        toLight: 'toLight 1s ease 1',
      },
      keyframes: {
        toDark: {
          from: {
            color: 'black',
            backgroundColor: 'white',
          },
          to: {
            color: 'white',
            backgroundColor: '#312e81',
          },
        },
        toLight: {
          from: {
            color: 'white',
            backgroundColor: '#312e81',
          },
          to: {
            color: 'black',
            backgroundColor: 'white',
          },
        },
      },
    },
  },
  plugins: [],
};
