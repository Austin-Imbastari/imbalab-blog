/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    darkMode: 'class',
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      pachang: ['Pachang', 'sans-serif'],
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
    },
  },
  plugins: [],
};
