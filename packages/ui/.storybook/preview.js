import { themes } from "@storybook/theming";
import "./output.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    darkClass: ["dark", "bg-black"],
    classTarget: "html",
    stylePreview: true,
  },
};
