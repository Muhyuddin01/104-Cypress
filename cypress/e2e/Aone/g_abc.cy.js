/// <reference types="cypress"/>

describe('validate CheckBoxes', () => {

    it('validate signle checkbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check('option1');
    });

    it('validate multiple/all checkbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
 
        cy.xpath('//input[@type="checkbox"]').check().should('be.visible'); //All selected
        // cy.xpath('//input[@type="checkbox"]').check(["option1","option2","option3"]).should('be.visible'); //Multiple selected way


        cy.xpath('//input[@type="checkbox"]').uncheck(); ////All selected
        // cy.xpath('//input[@type="checkbox"]').uncheck(["option1","option2","option3"]); //Multiple selected way
    });


    it.only('validate Radio button', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // cy.xpath('//input[@type="radio"]').first().click();
        // cy.xpath('//input[@type="radio"]').first().check();


        cy.xpath('//input[@type="radio"]').check('radio2');




    });



})
