describe("ping pong LeaderBoard", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/leaderboard/");
    // Cargar los datos del otro documento JSON utilizando cy.fixture()
    cy.fixture("playersDataFixture.json").then((playersData) => {
      localStorage.setItem("savedGames", JSON.stringify([playersData]));
    });
  });

  it("frontpage can be opened", () => {
    cy.contains("Leaderboard");
  });

  it("renders the winner and score", () => {
    cy.fixture("playersDataFixture.json").then((playersData) => {
      const { player1 } = playersData;
      cy.contains(`🏆 ${player1.name} - ${player1.score} 🏆`);
    });
  });

  it("New Game button", () => {
    cy.get("button").contains("New Game").click();
  });
});
