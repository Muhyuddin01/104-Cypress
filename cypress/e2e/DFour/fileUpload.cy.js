/// <reference types="cypress"/>


describe('this is file upload tutorial', () => {

    it('Learn Cypress file upload', function () {

        cy.visit('https://the-internet.herokuapp.com/upload');

        const myFile = 'abc.png';

        cy.get('#file-upload').attachFile(myFile);
        cy.get('#file-submit').click();
        cy.get('#uploaded-files').contains('abc.png');

    })
})