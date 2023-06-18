describe("ping pong", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("frontpage can be opened", () => {
    cy.contains("Game");
  });

  it("verifies names in input", () => {
    cy.get('input[placeholder="Player 1 name"]').type("John Doe");
    cy.get('input[placeholder="Player 2 name"]').type("Jane Smith");

    cy.get('input[placeholder="Player 1 name"]').should(
      "have.value",
      "John Doe"
    );
    cy.get('input[placeholder="Player 2 name"]').should(
      "have.value",
      "Jane Smith"
    );
  });

  it("button play game", () => {
    cy.get('input[placeholder="Player 1 name"]').type("John Doe");
    cy.get('input[placeholder="Player 2 name"]').type("Jane Smith");

    cy.contains("Play Game").click();
  });

  it("view leaderboard link", () => {
    cy.contains("view leaderboard").click();
    cy.url().should("include", "/leaderboard");
  });

  it("disables button when no names entered", () => {
    cy.get('input[placeholder="Player 1 name"]').should("be.empty");
    cy.get('input[placeholder="Player 2 name"]').should("be.empty");
    cy.get("button").contains("Enter players names").should("be.disabled");
  });
});
