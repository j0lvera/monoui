const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}", "./.storybook/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mono-primary": {
          DEFAULT: colors.zinc[800],
          hover: colors.zinc[700],
        },
        "mono-border": {
          DEFAULT: colors.gray["400"],
        },
        "mono-text": {
          DEFAULT: colors.gray["500"],
        },
        "mono-hover": {
          DEFAULT: colors.gray[200],
        },
        "mono-rounded": {
          DEFAULT: defaultTheme.borderRadius["lg"],
        },
        "mono-error": {
          DEFAULT: colors.red[500],
          hover: colors.red[400],
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
