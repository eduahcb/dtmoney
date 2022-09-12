const tsconfigPaths = require('vite-tsconfig-paths')

const { mergeConfig } = require('vite');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/stories/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/styles/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  features: {
    "storyStoreV7": true
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths.default()]
    })
  }
}