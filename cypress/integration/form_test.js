describe('This is our first test', () => {
    it('Should return true', () => {
        expect(true).to.equal(true)     
    })
})

describe('Testing our form inputs', () => {
    beforeEach(() => { //runs before each test in this block
        cy.visit('http://localhost:3000/')
    })
    
    it('Finds the first name input', () => {
        // Arrange - Get the element
        cy.get('[data-cy=fName]')
        // Act - Mimic the user interaction
        .type('Justin')
        // Assert - Test / verify
        .should('have.value','Justin')
    })

    it('find all inputs and try to submit', () => {
        cy.get('[data-cy=fName]')
        .type('Justin')
        
        .get('[data-cy=lName]')
        .type('Marks')
        
        .get('[data-cy=email]')
        .type('justinmarks19@gmail.com')

        .get('[data-cy=pass]')
        .type('af89afd8keda')

        .get('[data-cy=tos]')
        .check()

        .get('[data-cy=form]')
        .submit()
    })

    it('try to fail a submit', () => {
        cy.get('[data-cy=fName]')
        .type('Justin')
        
        .get('[data-cy=lName]')
        .type('Marks')

        .get('[data-cy=tos]')
        .check()

        .get('[data-cy=submit]')
        .click()
    })
})