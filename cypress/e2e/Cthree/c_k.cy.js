/// <reference types="cypress"/>


describe('Drag & Drop Functionality test', () => {

    it("ipad-2 ", () => {
        cy.visit('https://vishalok12.github.io/jquery-dragarrange/')

        cy.get('.d-1').drag('.d-4', {force: true})

    })

})



