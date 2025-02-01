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
    extend: {
      fontFamily: {
        theme: ['Funnel Sans', 'serif'],
        accent: ['Rubik', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
        post: ['Funnel Sans', 'serif'],
      },
      maxWidth: {
        'post': '600px',
      },
      fontSize: {
        'body': '22px',
      },
      colors: {
        canvas: '#EDEAE6',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
        },
        background: {
          DEFAULT: 'rgb(var(--background) / <alpha-value>)',
        },
        link: {
          DEFAULT: 'rgb(var(--link) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent-hue) 85% 61% / <alpha-value>)',
          light: 'hsl(var(--accent-hue) 46% 14% / <alpha-value>)',
          dark: 'hsl(var(--accent-hue) 78% 3% / <alpha-value>)',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            a: {
              color: '#fff',
              '&:hover': {
                color: '#e5e7eb',
              },
            },
            // Add more custom styles here
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
} 