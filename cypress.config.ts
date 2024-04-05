const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 8000,
  screenshotsOnRunFailure: true,
  videos:true,
  reporter: 'mochawesome',
  reporterOptions: {
      reportDir: "mochawesome-report",
      overwrite: false,
      html: false,
      json: true
  },
  screenshotsFolder: 'mochawesome-report/assets',
e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*Test.cy.ts',
    baseUrl: "https://www.facebook.com/login/"
  },
});
