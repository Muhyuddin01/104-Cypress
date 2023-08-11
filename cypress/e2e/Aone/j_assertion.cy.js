/// <reference types="cypress"/>


describe('Validate comples data using ASSERT', () => {

    it('Assert ', () => {
        cy.visit('www.google.com.pk');

        let firstName = 'TestingFunda'

        assert.equal(firstName, 'TestingFunda');
        assert.include(firstName, 'Testing');
        assert.typeOf(firstName, 'String')
        assert.notTypeOf(firstName, 'Integer')


        //Asserting Objects
        let person = {
            firstName: "Testing",
            lastName : "Funda"
        }

        assert.property(person, 'firstName');
        assert.isObject(person);
        assert.deepPropertyVal(person, 'firstName', 'Testing');
        assert.deepEqual(person, {
            firstName: "Testing",
            lastName : "Funda"
        })

        //Asserting Arrays
        let emp = [1,2,3,4,5]
        assert.isArray(emp)
        assert.includeDeepMembers(emp, [2,5]);
        assert.sameDeepOrderedMembers(emp,  [1,2,3,4,5]);
        assert.typeOf(emp, 'Array');
    })
})