const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: 'cypress/results',
        overwrite: true,
        html: true,
        json: true
    },
    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config)
            return config
        }
    }
})
