/// <reference types="cypress"/>

describe('Test ecommerce', () => {
    it('test contain thing', () => {
        cy.visit('https://www.amazon.com/');
        cy.xpath('//*[@id="twotabsearchtextbox"]').clear();
        cy.xpath('//*[@id="twotabsearchtextbox"]').type('pencile pouch');
        cy.contains('pencil pouch for 3 ring binder').click();
        cy.xpath('//*[@class="a-size-base-plus a-color-base a-text-normal" and text() = "ZIPIT Monster 3-Ring Pencil Case, Pink"]').click();
        // cy.get('#a-autoid-18-announce > :nth-child(2) > :nth-child(1) > .imgSwatch').click();
        cy.get('#add-to-cart-button').click();
        cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();
        


        // cy.xpath('//*[@id="color_name_5-announce"]').click();
        // cy.xpath('//*[@id="add-to-cart-button"]').click();

    })
})