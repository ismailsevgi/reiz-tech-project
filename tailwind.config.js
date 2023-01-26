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
            backgroundColor: '#e5e7eb',
          },
          to: {
            color: '#e5e7eb',
            backgroundColor: '#1c1917',
          },
        },
        toLight: {
          from: {
            color: '#e5e7eb',
            backgroundColor: '#1c1917',
          },
          to: {
            color: 'black',
            backgroundColor: '#e5e7eb',
          },
        },
      },
    },
  },
  plugins: [],
};
