/// <reference types="cypress"/>

describe('Smoke Test using Hooks', () => {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    beforeEach(function () {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();
    })

    // it('validate link case 1', () => {
    //     cy.xpath('//*[@class="oxd-text oxd-text--span oxd-main-menu-item--name" and text() = "Admin"]').click();
    // })


    it('validate link case 2', () => {
        // cy.get(':nth-child(11) > .oxd-main-menu-item').click();

        cy.xpath('//*[@class="oxd-text oxd-text--span oxd-main-menu-item--name" and text() = "Claim"]').click();

        // cy.xpath('//*[@class="oxd-text oxd-text--span oxd-main-menu-item--name" and text() = "Time"]').click();
    })

    afterEach(function () {

        cy.xpath('//*[@class="oxd-userdropdown-tab"]').click();
        // cy.xpath('//*[@class="oxd-userdropdown-name" and text() = "shekar reddy"]').click();
        cy.xpath('//*[@role="menuitem" and text() = "Logout"]').click();


        // cy.get('.oxd-userdropdown-tab').click();
        // cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
    })
})


