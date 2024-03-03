const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "de57h4",
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/",
    retries: 0,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
