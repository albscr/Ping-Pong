describe('ping pong', () => {
  it('frontpage can be opened', () => {
    cy.visit('https://ping-pong-ubwq.vercel.app/')
    cy.contains('Game')
  })
  // it('frontpage can be opened', () => {
  //   cy.visit('https://ping-pong-ubwq.vercel.app/')
  //   cy.contains('Game')
  // })
})