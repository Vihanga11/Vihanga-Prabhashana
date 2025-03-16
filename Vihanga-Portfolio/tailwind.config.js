/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#181818',      // lighter dark background
          surface: '#262626', // lighter surface color
          text: '#f3f3f3',    // slightly off-white for main text
          muted: '#d1d1d1'    // much lighter muted text for better readability
        }
      }
    },
  },
  plugins: [],
};
