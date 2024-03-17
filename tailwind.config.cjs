/** @type {import('tailwindcss').Config}*/
const colors = require("tailwindcss/colors")
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: colors.zinc,
        secondary: colors.sky
      }
    },
  },

  plugins: [],
};

module.exports = config;
