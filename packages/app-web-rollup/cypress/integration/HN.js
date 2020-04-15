describe('HackerNews', () => {
  before(() => {
    cy.visit('/hacker-news');
  });

  it('Is at the right URL', () => {
    cy.findByText('Hacker News').click();
    cy.url().should('include', '/hacker-news');
  });

  it(`Has the correct heading`, () => {
    cy.findByRole('heading').should('exist');
  });

  /*
  
  it('Shows the right heading', () => {
    cy.findByText(/love this/i).should('exist');
  });
  */
});
