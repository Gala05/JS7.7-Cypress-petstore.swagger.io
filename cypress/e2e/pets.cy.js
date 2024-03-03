describe("pet", () => {
  it("create pets", () => {
    const pet_id = 9999;
    const pet_name = "Dominik";

    cy.request("POST", "/pet", {
      //запрос на создание животного
      id: pet_id,
      name: pet_name,
      photoUrls: [],
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eqls({
        id: pet_id,
        name: pet_name,
        photoUrls: [],
        tags: [],
      });

      var petId = response.body.id;

      cy.request("GET", `/pet/${petId}`).then((response) => {
        //проверяем его наличие
        expect(response.status).be.eql(200);
        expect(response.body).be.eqls({
          id: pet_id,
          name: pet_name,
          photoUrls: [],
          tags: [],
        });

        cy.request("DELETE", `/pet/${petId}`).then((response) => {
          //удаляем
          expect(response.status).be.eql(200);

          cy.request({
            //через cy.request(options) проверяем, что с таким id не сущ-ет
            method: "GET",
            url: `/pet/${petId}`,
            failOnStatusCode: false,
          }).then((response) => {
            expect(response.status).be.eql(404);
          });
        });
      });
    });
  });
});
