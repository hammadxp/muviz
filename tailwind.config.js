/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      screens: {
        "1200px": { max: "1200px" },
        "600px": { max: "600px" },
      },
    },
  },
  plugins: [],
};
