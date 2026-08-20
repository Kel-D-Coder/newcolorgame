/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14110F",
        cream: "#FBF6EC",
        "card-red": "#E63946",
        "card-red-dark": "#B92834",
        "spell-yellow": "#FFC93C",
        "move-green": "#2DA44E",
        "sky-blue": "#2E86DE",
        "point-purple": "#8E44AD",
        "naija-gold": "#D4A017",
      },
      fontFamily: {
        display: ["'Baloo 2'", "cursive"],
        body: ["Manrope", "sans-serif"],
        tag: ["'Space Mono'", "monospace"],
      },
      borderRadius: {
        chip: "16px",
      },
      boxShadow: {
        card: "0 20px 40px -18px rgba(20,17,15,0.35)",
        "card-sm": "0 10px 24px -12px rgba(20,17,15,0.3)",
        "card-flat": "0 1px 2px rgba(20,17,15,0.06)",
      },
    },
  },
  plugins: [],
};
