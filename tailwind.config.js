/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind analiza estas rutas para detectar las clases utilizadas; si un archivo queda fuera, sus clases no se generan.
  content: ["./tailwind/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          dark: "#1d4ed8",
        },
        secondary: "#0f172a",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
      spacing: {
        card: "1.375rem",
      },
    },
  },
  plugins: [],
};
