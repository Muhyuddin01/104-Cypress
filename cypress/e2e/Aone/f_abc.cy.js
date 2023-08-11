/// <reference types="cypress"/>

describe('validate Dropdown', () => {

    /*     it('valid SELECT base dropdown', () => {
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
            cy.get('#dropdown-class-example').select('option1').should('be.visible');
    
        }); */


    // it('valid Auto complete base dropdown', () => {
    //     cy.visit('https://google.com/');
    //     cy.get('#APjFqb').type('Cypress Automation');
    //     cy.contains('cypress automation example').click();
    // });



    it('valid SELECT base dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type('Pakistan').should('be.visible');
        cy.contains('Pakistan').click();
        cy.get('#autocomplete').should('be.visible');
    });



})
