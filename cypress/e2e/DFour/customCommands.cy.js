/// <reference types="cypress"/>


describe('Learn Custom Commands', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it('First case', function () {

        cy.Login_HRM('Admin', 'admin123');
        cy.url().should('include', '/dashboard');
        cy.title().should('contains', 'OrangeHRM')

        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click();

        cy.get(':nth-child(2) > .oxd-input').type('12345')
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('yash')
        cy.xpath('//*[@type="submit" and text() = " Search "]').click({ force: true });

        // cy.xpath('//*[@type="reset" and text() = " Reset "]').click({force: true});

        cy.Logout_HRM();
        cy.url().should('include', 'auth/login');
    })
    it('Second Case', function () {

        cy.Login_HRM('Admin', 'admin123');
        cy.url().should('include', '/dashboard');
        cy.title().should('contains', 'OrangeHRM')


        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click();

        cy.get(':nth-child(2) > .oxd-input').type('12345')
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('yash')
        cy.xpath('//*[@type="submit" and text() = " Search "]').click({ force: true });

        cy.xpath('//*[@type="reset" and text() = " Reset "]').click({ force: true });

        cy.Logout_HRM();
        cy.url().should('include', 'auth/login');
    })
    it('Third Case', function () {

        cy.Login_HRM('Admin', 'admin123');
        cy.url().should('include', '/dashboard');
        cy.title().should('contains', 'OrangeHRM')


        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click();

        cy.get(':nth-child(2) > .oxd-input').type('12345')
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('yash')

        cy.xpath('//*[@type="reset" and text() = " Reset "]').click({ force: true });


        cy.Logout_HRM();
        cy.url().should('include', 'auth/login');
    })
})


