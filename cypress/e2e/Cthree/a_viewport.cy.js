/// <reference types="cypress"/>


describe('Learning ViewPort', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com/')

    })
    it("ipad-2 ", () => {
        cy.viewport('ipad-2')
        cy.log('ipad-2')
        cy.wait(2000);
    })

    it("ipad x ", () => {
        cy.viewport('iphone-x')
        cy.log('ipad x')
        cy.wait(2000);

    })

    it("iphone-se2	 ", () => {
        cy.viewport('iphone-se2')
        cy.log('iphone-se2')
        cy.wait(2000);

    })

    it("macbook-16", () => {
        cy.viewport('macbook-16')
        cy.log('macbook-16')
        cy.wait(2000);

    })

    it("samsung-note9", () => {
        cy.viewport('samsung-note9')
        cy.log('samsung-note9')
        cy.wait(2000);

    })

    it("Custom Resultion", () => {
        cy.viewport(550, 750)
        cy.log('Custom Resultion')
        cy.wait(2000);

    })

    it("Responsive", () => {
        cy.viewport('responsive')
        cy.log('Responsive')
        cy.wait(2000);

    })

})

