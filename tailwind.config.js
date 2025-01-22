// tailwind.config.js

/** @type {import('tailwindcss').Config} */
import preline from 'preline/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/dist/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    preline,
  ],
  
}

