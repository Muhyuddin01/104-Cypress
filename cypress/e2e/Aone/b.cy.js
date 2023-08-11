/// <reference types="cypress"/>

describe ('validate login functionality', () => {
    
    it('valid case', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();


        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click();
        cy.get('.oxd-topbar-body').contains('apply', {matchCase: false}).click();


        cy.get('.oxd-topbar-body').contains(/^M\w+/).click();

        cy.contains('Apply').click();
        
    })
})


