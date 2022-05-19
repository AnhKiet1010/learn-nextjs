// cypress/integration/app.spec.js

describe('Works Page', () => {
  it('should have h1 title', () => {
    // Start from the index page
    cy.visit('/works')

    // The new page should contain an h1 with "About page"
    cy.get('h2').contains('Work')
  })
})

const asModule = {}
export default asModule
