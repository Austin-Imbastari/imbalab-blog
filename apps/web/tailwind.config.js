import daisyui from 'daisyui';
import typography from '@tailwindcss/typography'; // Import the typography function

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // fontSize: {
      //   sm: 'clamp(0.8rem, 0.17vi + 0.76rem, 0.89rem)',
      //   base: 'clamp(1rem, 0.34vi + 0.91rem, 1.19rem)',
      //   lg: 'clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem)',
      //   xl: 'clamp(1.56rem, 1vi + 1.31rem, 2.11rem)',
      //   '2xl': 'clamp(1.95rem, 1.56vi + 1.56rem, 2.81rem)',
      //   '3xl': 'clamp(2.44rem, 2.38vi + 1.85rem, 3.75rem)',
      //   '4xl': 'clamp(3.05rem, 3.54vi + 2.17rem, 5rem)',
      //   '5xl': 'clamp(3.81rem, 5.18vi + 2.52rem, 6.66rem)',
      //   '6xl': 'clamp(4.77rem, 7.48vi + 2.9rem, 8.88rem)',
      // },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
            // ...
          },
        },
        dark: {
          css: {},
        },
      }),
    },
    darkMode: 'class',
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      pachang: ['Pachang', 'sans-serif'],
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
    },
    container: {
      center: true,
    },
  },
  plugins: [daisyui, typography],
};
