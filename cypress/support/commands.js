import checkingLogin from "../fixtures/login";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("createUser", (method, url, checkingLogin) => {
  cy.request(method, url, checkingLogin).then((response) => {
    expect(response.status).be.eql(200);
    expect(response.body).be.eqls({
      code: 200,
      type: "unknown",
      message: `${checkingLogin.id}`,
    });
  });
});

Cypress.Commands.add("getUser", (method, url) => {
  cy.request(method, url).then((response) => {
    expect(response.status).be.eql(200);
  });
});

Cypress.Commands.add("deleteUser", (method, url, checkingLogin) => {
  cy.request(method, url, checkingLogin).then((response) => {
    expect(response.status).be.eql(200);
    expect(response.body).be.eqls({
      code: 200,
      type: "unknown",
      message: `${checkingLogin.username}`,
    });
  });
});

Cypress.Commands.add("putUser", (method, url, checkingLogin) => {
    cy.request(method, url, checkingLogin).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: `${checkingLogin.id}`,
      });
    });
  });

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
