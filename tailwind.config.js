const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const Color = require("color");

// https://github.com/tailwindlabs/discuss/issues/392#issuecomment-559305633
const alpha = (clr, val) => Color(clr).alpha(val).rgb().string();
const lighen = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{ts,tsx}",
    // "./src/examples/**/*.{ts,tsx}",
    "./src/index.ts",
  ],
  theme: {
    extend: {
      colors: {
        "mono-primary": {
          DEFAULT: colors.zinc[800],
          hover: colors.zinc[700],
        },
        "mono-border": {
          DEFAULT: colors.gray["300"],
        },
        "mono-text": {
          DEFAULT: colors.gray["500"],
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
  plugins: [require("@tailwindcss/forms")],
};
