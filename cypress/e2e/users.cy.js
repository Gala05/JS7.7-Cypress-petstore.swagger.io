import checkingLogin from "../fixtures/login";

describe("integration tests for petstore.swagger.io", () => {
  it("edit the user and check the changes", () => {
    cy.createUser("POST", "/user", checkingLogin.user2);
    cy.getUser("GET", `/user/${checkingLogin.user2.username}`);
    cy.putUser("PUT", `/user/${checkingLogin.user2.username}`, checkingLogin.user2change);
    cy.getUser("GET", `/user/${checkingLogin.user2change.username}`);
  });

  it("create user and check the creation", () => {
    cy.createUser("POST", "/user", checkingLogin.user1);
    cy.getUser("GET", `/user/${checkingLogin.user1.username}`);
  });

  it("delete user and check the delete", () => {
    cy.createUser("POST", "/user", checkingLogin.user1);
    cy.getUser("GET", `/user/${checkingLogin.user1.username}`);
    cy.deleteUser("DELETE", `/user/${checkingLogin.user1.username}`, checkingLogin.user1);

    cy.request({
      method: "GET",
      url: `/user/${checkingLogin.user1.username}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).be.eql(404);
      expect(response.body).to.include({
        message: "User not found",
      });
    });
  });
});
