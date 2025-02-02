describe("template spec", () => {
  it("should be able to search for a product", () => {
    cy.visit("/");
    cy.get("input[name=q]").type("moletom").parent("form").submit();

    cy.location("pathname").should("include", "/search");
    cy.location("search").should("include", "q=moletom");

    cy.get('a[href^="/product"]').first().click();
  });

  it("should be not be able to visit search page without a search query", () => {
    cy.on("uncaught:exception", () => {
      return false;
    });
    cy.visit("/search");
    cy.location("pathname").should("equal", "/");
  });
});
