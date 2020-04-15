describe('Sapper template app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Great success!');
  });

  it('navigates to /about', () => {
    cy.get('nav a').contains('about').click();
    cy.url().should('include', '/about');
  });

  it('navigates to /blog', () => {
    cy.get('nav a').contains('blog').click();
    cy.url().should('include', '/blog');
  });

  it('navigates to /hacker-news', () => {
    cy.get('nav a').contains('Hacker News').click();
    cy.url().should('include', '/hacker-news');
  });

  it('navigates to /love', () => {
    cy.get('nav a').contains('blog').click();
    cy.url().should('include', '/blog');
  });
});
