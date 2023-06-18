describe("ping pong tracker", () => {
  beforeEach(() => {
    cy.fixture("playersDataFixturetie.json").then((playersData) => {
      const localStorageData = JSON.stringify(playersData);
      cy.visit("http://localhost:5173/tracker/", {
        onBeforeLoad(win) {
          win.localStorage.setItem("playersData", localStorageData);
        },
      });
    });
  });

  it("should click the Save game button", () => {
    cy.contains("Save game").click({ force: true });
  });

  it("should disable the 'Save game' button when scores are tied", () => {
    cy.get("button").contains("Save game").should("be.disabled");
  });
});

describe("Save game", () => {
  beforeEach(() => {
    cy.fixture("playersDataFixturetie.json").then((playersData) => {
      const localStorageData = JSON.stringify(playersData);
      cy.visit("https://ping-pong-tracker.vercel.app/tracker/", {
        onBeforeLoad(win) {
          win.localStorage.setItem("playersData", localStorageData);
        },
      });
    });
  });

  it("frontpage can be opened", () => {
    cy.contains("Game");
  });

  it("should click the Add win button", () => {
    cy.get("button.bubbly-button").contains("Add win!").click();
    cy.get("button.bubbly-button").eq(1).click();
    cy.contains("Current winner");
    cy.get("button").contains("Save game").click();
  });
});
