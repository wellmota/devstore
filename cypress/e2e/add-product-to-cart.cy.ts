describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be able to navigate to the product page and add it to the cart", () => {
    cy.get('a[href^="/product"]').first().click();
    cy.url().should("include", "/product");
    cy.location("pathname").should("include", "/product");

    cy.contains("Add to cart").click();
    cy.contains("Cart(1)").should("exist");
  });

  it("shoud not count duplicate products", () => {
    cy.get('a[href^="/product"]').first().click();
    cy.url().should("include", "/product");
    cy.location("pathname").should("include", "/product");

    cy.contains("Add to cart").click();
    cy.contains("Cart(1)").should("exist");
  });

  it("should be able to search for a product and add it to cart", () => {
    cy.searchByQuery("moletom");
    cy.get('a[href^="/product"]').first().click();
    cy.contains("Add to cart").click();
    cy.contains("Cart(1)").should("exist");
  });
});
