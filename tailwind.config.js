const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, './layouts/**/*.liquid'),
    path.join(__dirname, './templates/**/*.liquid'),
    path.join(__dirname, './snippets/**/*.liquid'),
    path.join(__dirname, './src/**/*.{js,jsx,ts,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: []
} 