/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },
        secondary: '#0f172a',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      spacing: {
        card: '1.375rem',
      },
    },
  },
  plugins: [],
}
