/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Fuggles"],
    },
    variants: {
      textColor: ["group-hover"],
    },
  },
  plugins: [],
};
