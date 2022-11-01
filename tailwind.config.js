/** @type {import('tailwindcss').Config} */
const vanillaRTL = require("tailwindcss-vanilla-rtl");


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [vanillaRTL],
  corePlugins: {
    ...vanillaRTL.disabledCorePlugins,
    float: false,
    clear: false,
  },
};