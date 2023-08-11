/// <reference types="cypress"/>


describe('handling iframe', () => {
    it("validate Simple/Basic Alert", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        //simply click on the alert button and verify the text
/*         cy.get(':nth-child(1) > button').click();
        cy.get('#result').should('have.text', 'You successfully clicked an alert'); */

        //click on the alert button and proper verify the alert
        cy.get(':nth-child(1) > button').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.eq('I am a JS Alert');
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert');


    })



    it("validate Confirmational Alert", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        //for OK
/*         cy.get(':nth-child(2) > button').click();
        cy.on('window:confirm', (AcceptConfirm) => {
            expect(AcceptConfirm).to.eq('I am a JS Confirm');
        })
        cy.xpath('//*[@id="result"]').contains(' Ok'); */

    })


    it("validate Cancel Alert", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        //for cancel
        cy.on('window:confirm', (CancelClick) => {
            return false;
            cy.get(':nth-child(2) > button').click();
            cy.xpath('//*[@id="result"]').should('have.text','You clicked: Cancel');
        })

    })



    it.only("validate Prompt Alert", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.window().then(function(promptAlert){

            // stub window alert
            cy.stub(promptAlert, "prompt").returns("Hello Pakistan");
            cy.get(':nth-child(3) > button').click();
            cy.xpath('//*[@id="result"]').contains('Hello Pakistan');

        })

    })
})

