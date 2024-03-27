const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 8000,
e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*Test.cy.ts',
    baseUrl: "https://www.facebook.com/login/"
  },
});
