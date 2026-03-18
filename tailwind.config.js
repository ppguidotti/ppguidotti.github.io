/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--color-accent-hover)",
        },
      },
    },
  },
  plugins: [],
}
