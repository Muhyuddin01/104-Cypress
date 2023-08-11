/// <reference types="cypress"/>


/* describe('handling Tabs', () => {
    it("validate Simple/Basic Alert", () => {
        cy.visit('https://www.google.com/gmail/about/');

        cy.get('.footer__links > :nth-child(2) > :nth-child(4) > .link').invoke('removeAttr', 'target').click();

        cy.xpath("//a[@class='modules-lib__interstitial--cta-btn glue-button glue-button--medium-emphasis']").click();


        // cy.xpath("//a[@class='modules-lib__interstitial--cta-btn glue-button glue-button--medium-emphasis']").invoke('removeAttr', 'target').click();





    })

}) */




//another way to do it
describe('handling Tabs', () => {
    it("validate Simple/Basic Alert", () => {
        cy.origin('https://www.google.com/gmail/about/', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('Things went bad')) {
                    // Ignore the expected error and continue the test
                    return false;
                }
            });
        });

        // Visit the page that triggers the error
        cy.visit('https://about.google/products/');

        // Continue with your test steps
        cy.get('.modules-lib__interstitial--cta-btn').invoke('removeAttr', 'target').click();
        //   cy.get('.three-up-opener__cta').click();
    });
});

