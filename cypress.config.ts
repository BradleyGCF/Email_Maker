import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },

  e2e: {
    // biome-ignore lint/correctness/noUnusedVariables: <explanation>
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
