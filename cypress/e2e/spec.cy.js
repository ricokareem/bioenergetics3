/// <reference types="cypress" />

it("Card Stack Workflow", () => {
  cy.visit("/");
  cy.contains("HEALING SEQUENCES").should("be.visible").click();
  cy.contains("Pinch of Salt").should("be.visible").click();
  cy.get("video").should("be.visible");
});

it("Symptoms Workflow", () => {
  cy.visit("/");
  cy.contains("SYMPTOMS AND CONDITIONS").should("be.visible").click();
  cy.contains("Migraine").should("be.visible").click();
  cy.get("video").should("be.visible");
  cy.get('[data-testid="pause-play-button"]')
    .scrollIntoView()
    .should("be.visible")
    .should("not.be.disabled")
    .click();
});
