// cypress/integration/app.spec.js

describe('Home page', () => {
  it('should redirect to works', () => {
    // Start from the index page
    cy.visit('/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="works"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/works')

    // The new page should contain an h1 with "About page"
    cy.get('h2').contains('Works Page')
  })
})

const asModule = {}
export default asModule
