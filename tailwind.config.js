/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        canvas: "calc(100% - 256px)",
      },
      fontFamily: {
        primary: "'Plus Jakarta Sans', sans-serif",
      },
      height: {
        body: "calc(100% - 62.8px)",
      },
      inset: {
        editor: "calc(50% - 200px)",
      },
      backgroundImage: {
        "pure": "url('./src/assets/background/pure_bg.svg')",
        "space": "url('./src/assets/background/space_bg.svg')",
      },
    },
  },
  plugins: [],
};
