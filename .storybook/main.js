module.exports = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    // "../src/examples/**/*.stories.mdx",
    // "../src/examples/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // "storybook-dark-mode",
  ],

  docs: {
    autodocs: true,
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  }
};
