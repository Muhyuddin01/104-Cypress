/// <reference types="cypress"/>

        //Cypress tutorial 9 - How to locate element using find command


describe ('validate login functionality', () => {
    
    it('valid case', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();

        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click();

        cy.get('.oxd-topbar-body-nav > ul').find('li a').contains('Apply').click();
        cy.get('.oxd-topbar-body-nav > ul').find('li a').contains('My Leave').click();




    })
})


