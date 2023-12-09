const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
        mono: ["'sans-serif'", ...defaultTheme.fontFamily.mono],
      },

    },
  },
  plugins: [],
}

