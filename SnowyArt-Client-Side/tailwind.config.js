/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        firstColor: '#fa983a',
        secondColor: '#38ada9',
      },
    },
  },
  plugins: [require('daisyui')],
};
