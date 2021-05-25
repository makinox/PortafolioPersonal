/// <reference types="cypress" />

export default context('Login', () => {
  it('Its login page', () => {
    cy.visit('http://localhost:8000/');
    cy.location('pathname').should('include', '/');
  });
});
