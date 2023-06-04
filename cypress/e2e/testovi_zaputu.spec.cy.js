describe("#9 Запит методом GET на сайт https://tenders.guru/pl/api ", () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  it("Отримайте розширений набір даних для тендеру, отримання id та description", () => {
    for (let index = 0; index < 2; index++) {
      const randomPage = getRandomInt(5830);

      const request = {
        method: "GET",
        url: "https://tenders.guru/api/pl/tenders/",
        // page_number: randomPage,
        failOnStatusCode: false,
      };

      cy.request(request).then((response) => {
        assert.isTrue(response.status == 200);
        const id = response.body.data[0].id; // Отримання id з відповіді
        cy.log(`page_number: ${randomPage}`);
        cy.log("request", request);
        cy.log("response", response);
        cy.log("id", id);
        cy.log("page_number", response.body.page_number);
        // cy.log("data. id", response.body.data[1].id);
        // cy.log("description:", response.body.data[page_number].description);
      });
    }
  });
});

describe("#9.1 Запит методом GET на сайт https://tenders.guru/pl/api ", () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  it("Отримайте розширений набір даних для тендеру, отримання id та description", () => {
    for (let index = 0; index < 2; index++) {
      const randomPage = getRandomInt(5830);

      const request = {
        method: "GET",
        url: "https://tenders.guru/api/pl/tenders/",
        // page_number: randomPage,
        failOnStatusCode: false,
      };

      cy.request(request).then((response) => {
        assert.isTrue(response.status == 200);
        const id = response.body.data[0].id; // Отримання id з відповіді
        cy.log(`page_number: ${randomPage}`);
        cy.log("request", request);
        cy.log("response", response);
        cy.log("id", id);
        cy.log("page_number", response.body.page_number);
        // cy.log("data. id", response.body.data[1].id);
        // cy.log("description:", response.body.data[page_number].description);
      });
    }
  });
});

describe("#9.2 Запит методом GET на сайт https://tenders.guru/pl/api ", () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  it("Отримайте розширений набір даних для тендеру, отримання id та description", () => {
    for (let index = 0; index < 2; index++) {
      const randomPage = getRandomInt(5830);

      const request = {
        method: "GET",
        url: "https://tenders.guru/api/pl/tenders/",
        // page_number: randomPage,
        failOnStatusCode: false,
      };

      cy.request(request).then((response) => {
        assert.isTrue(response.status == 200);
        const id = response.body.data[0].id; // Отримання id з відповіді
        cy.log(`page_number: ${randomPage}`);
        cy.log("request", request);
        cy.log("response", response);
        cy.log("id", id);
        cy.log("page_number", response.body.page_number);
        // cy.log("data. id", response.body.data[1].id);
        // cy.log("description:", response.body.data[page_number].description);
      });
    }
  });
});

describe("Негативний сценарій запиту ", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/post",
    failOnStatusCode: false,
  };

  it("response code should be 405", () => {
    cy.request(request).then((response) => {
      assert.equal(405, response.status);
    });
  });
});
