describe("#7.5* Запит методом GET на сайт https://tenders.guru/pl/api ", () => {
  it("Отримуємо перелік доступних tender_id ", () => {
    const request = {
      method: "GET",
      url: "https://tenders.guru/api/pl/tenders",
      page: 5,
      failOnStatusCode: false,
    };

    cy.request(request).then((response) => {
      cy.log("request", request);
      cy.log("response", response);
      cy.log("typeof response", typeof response.body.data);
      cy.log("status_Text", response.status, response.statusText);
      const tenderIds = Object.keys(response.body).map(
        (key) => response.body.data[key]
      );
      cy.log("tenderIds", tenderIds);
    });
  });
  it("Отримайте розширений набір даних для тендеру, отримання id та description", () => {
    const request = {
      method: "GET",
      url: "https://tenders.guru/api/pl/tenders/{tender_id}",
      id: 586940,
      failOnStatusCode: false,
    };

    cy.request(request).then((response) => {
      // assert.isTrue(response.status == 200);

      // cy.log(`ID: ${tender_id}`);
      cy.log("request", request);
      cy.log("response", response);
      // const id = response.body.data[1].id;
      // cy.log("id", id);
      cy.log("page_number", response.body.page_number);
      // cy.log("description:", response.body.data[1].description);
      cy.log("status_Text", response.status, response.statusText);
    });
  });
});
