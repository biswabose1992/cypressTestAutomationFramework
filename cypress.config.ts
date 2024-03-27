const { defineConfig } = require("cypress");

module.exports = defineConfig({
  blockHosts: [
    '*cmpv2.autotrader.co.uk'
],
e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*Test.cy.ts',
    baseUrl: "https://www.autotrader.co.uk"
  },
});
