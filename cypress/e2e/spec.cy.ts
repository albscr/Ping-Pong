describe('ping pong', () => {
  it('frontpage can be opened', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Game')
  })
})