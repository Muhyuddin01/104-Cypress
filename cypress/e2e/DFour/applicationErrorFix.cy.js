/// <reference types="cypress"/>


describe('Fixinf error Generating from Code, not Cypress', () => {

    //code for fixing the error
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('Fixing app error', function () {

        cy.visit('https://chercher.tech/practice/popups#');
    })
})