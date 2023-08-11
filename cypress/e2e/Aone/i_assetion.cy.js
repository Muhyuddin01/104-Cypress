/// <reference types="cypress"/>


describe('Learn BDD Explicit Assertions', () => {

    it.only('Validate Complex Data using expect', () => {

        cy.visit('www.google.com');

        //Simple String Verification 

        let PageName = "Google HomePage"

        expect(PageName).to.not.eq('Google');
        expect('Hello').to.be.eq('Hello');
        expect(PageName).to.be.a('string');
        expect(PageName).to.have.length.at.most(15);


        //Validating Objects
        let person = {
            firstName: "Testing",
            lastName: "Funda"
        }
        expect(person).to.be.deep.eq({
            firstName: "Testing",
            lastName: "Funda"
        })
        expect(person).to.have.property("lastName", 'Funda')

        let a = "12345"
        expect(a).to.be.eq('12345');
    

        //Validating the arrays
        let empId = [1,2,3,4,5]
        expect(empId).to.have.ordered.members([1,2,3,4,5])
        expect(empId).to.include(2);
        expect(empId).to.include.members([2,4]);
    })



})


