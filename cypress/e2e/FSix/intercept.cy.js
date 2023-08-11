/// <reference types= "cypress"/>


describe('Learning API Intercept', () => {

    //code for fixing the error
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('Simple API Intercept / Spy API requests', () => {

        cy.visit('https://dummyapi.io/explorer');


        cy.intercept({

            path: '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'

        }).as('comments')

        cy.get('.flex > :nth-child(5)').click();
        cy.wait('@comments').then(intercept => {
            expect(intercept.response.body.total).eq(2)
        })
    })



    //Testing Funda way
    it('Mock API Response', () => {

        cy.visit('https://dummyapi.io/explorer');


        cy.intercept(

            'GET',
            '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',
            { total: 5, Name: 'Testing Funda' }


        ).as('comments')

        cy.get('.flex > :nth-child(5)').click();
        cy.wait('@comments').then(intercept => {
            expect(intercept.response.body.Name).eq('Testing Funda');
            expect(intercept.response.body.total).eq(2);

        })
    })

    //Sir Qasim way, BUT NOT SUCCEED
    // it.only('Mock API Response', () => {

    //     cy.visit('https://dummyapi.io/explorer');

    //     cy.intercept({
    //         method: 'GET',
    //         url: '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',
    //         data: { total: 2 , Name: "Testing Funda" }
    //     }).as('comments')
    //     cy.get('.flex > :nth-child(5)').click();
    //     cy.wait('@comments').then(intercept => {
    //         expect(intercept.response.body.total).eq(2)
    //     })
    // })


    // //Sir Qasim way, BUT NOT SUCCEED
    it.only('Chat- Mock API Response', () => {
        cy.visit('https://dummyapi.io/explorer');
    
        cy.intercept({
            method: 'GET',
            url: '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',
            Headers:
            {
                'Content-Type': 'application/json'
            },
            middleware:
            {
                "total": 2,
                "Name": "Testing Funda"
            }
        }).as('comments');
    
        cy.get('.flex > :nth-child(5)').click();
    
        cy.wait('@comments').then(intercept => {
            expect(intercept.response.body.total).to.eq(2);
        });
    });
    


    /* it('Data Driven Mock API Response using Inercept', () => {

        cy.visit('https://dummyapi.io/explorer');


        cy.intercept(

            'GET',
            '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',
            { fixture: 'example.json' }


        ).as('comments')

        cy.get('.flex > :nth-child(5)').click();
        cy.wait('@comments').then(intercept => {
            expect(intercept.response.body.Name).eq('abc');
            expect(intercept.response.body.total).eq(5);
            expect(intercept.response.body.limit).eq(10);
            expect(intercept.response.body.id).eq("60d2252067d0d8992e611a85");
        })
    }) */
})