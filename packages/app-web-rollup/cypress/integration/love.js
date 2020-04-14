describe('Love page', () => {
  before(() => {
    cy.visit('/love');
  });

  it('navigates to /love', () => {
    cy.findByText('love').click();
    cy.url().should('include', '/love');
  });

  it('Shows the right heading', () => {
    cy.findByText(/love this/i).should('exist');
  });
});
