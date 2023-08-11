/// <reference types="cypress"/>


//One way
describe('This is Fixture tutotial', () => {

    before(function () {

        //Call the TEST DATA FILE   
        cy.fixture('example.json').then(function (loginData) {
            this.loginData = loginData;
        })
    })

    it('TDD or parametarizing a test', function () {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.loginData.Username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.loginData.Password);
        cy.get('.oxd-button').click();
    })
})





//an other way
/* 
describe('This is Fixture tutorial', function () {
    before(function () {
        // Use a standard function to ensure proper 'this' context
        cy.fixture('example.json').then(function(abc) {
            this.abc = abc;
        });
    });

    it('DD or parametarizing a test', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        const { Username, Password } = this.abc;

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Password);

        cy.get('.oxd-button').click();

        cy.url().should('include', '/dashboard');
    });
});
 */

