/// <reference types="cypress"/>

describe('BDD Style Assertions', () => {

    it('Validate OrangeHRM Login Page', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', '/auth/login');
        cy.title().should('eq', 'OrangeHRM');
        cy.get('.oxd-text--h5').should('have.text', 'Login');
        cy.get('.oxd-sheet > :nth-child(2)').should('include.text', 'admin123');
        cy.get('.oxd-text--h5').should('not.contain', 'Logout');




        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.enabled');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.enabled').and('not.be.disabled');


        cy.get('.oxd-button').should('have.css', 'background-color', 'rgb(255, 123, 29)');


        
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        // cy.get('.oxd-button').click();
        // cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click();
        // cy.get('.oxd-topbar-body-nav > ul').find('li a').contains('Apply').click();
        // cy.get('.oxd-topbar-body-nav > ul').find('li a').contains('My Leave').click();

    })


    it.only('Validate OrangeHRM Login Page', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//input[@type="checkbox"]').check().should('be.visible'); //All selected
        cy.xpath('//input[@type="checkbox"]').should('have.length', 3);

        cy.xpath('//input[@type="radio"]').should('have.length', 3);



    })
})


