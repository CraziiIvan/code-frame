/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "canvas": "calc(100% - 256px)"
      },
      fontFamily: {
        "primary": "'Plus Jakarta Sans', sans-serif",
      },
      height: {
        "body":  "calc(100% - 62.8px)",
      }
    },
  },
  plugins: [],
}