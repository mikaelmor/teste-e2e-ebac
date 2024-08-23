const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8cm72a',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
