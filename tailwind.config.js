// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// import daisyui from "daisyui";
// import { Flowbite } from 'flowbite-react';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  // plugins: [require("daisyui"), require("flowbite/plugin")],
};
