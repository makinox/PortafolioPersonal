/// <reference types="cypress" />

export default context('Login', () => {
  it('Its login page', () => {
    cy.visit('http://localhost:8000/');
    cy.location('pathname').should('include', '/');
  });

  // describe('Layout', () => {
  //   it('Login should have a preview pizza image', () => {
  //     cy.get('[data-cy="preview-image"]').should('be.visible').should('have.length', 1);
  //   });

  //   it('Login should have a page container', () => {
  //     cy.get('[data-cy="page-container"]').should('be.visible').should('have.length', 1);
  //   });

  //   it('Login should have a form', () => {
  //     cy.get('[data-cy="page-container"] form').should('be.visible').should('have.length', 1);
  //   });
  // });
});
