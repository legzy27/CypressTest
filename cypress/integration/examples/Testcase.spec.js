describe('Cypress test case 1', () => {

    it ('Navigate to Google', () => {
        // Navigate to Google 
      cy.visit('http://www.google.com')
      cy.wait(1000)
      //Search for Cypress 
      cy.get('#tsf').type('cypress docs').click()
      cy.wait(1000)
      // Click on the Cypress link (https://www.cypress.io)  
      cy.contains('Cypress').click()
      cy.wait(1000)
      //Check the URL contains “cypress” 
      //Navigate to the Docs section 
      cy.url().should('include', 'cypress')
      cy.wait(1000)
      //Check if the page contains “Why Cypress?” 
      cy.contains('Why Cypress?').should('be.visible')

    })

})