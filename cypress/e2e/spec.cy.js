describe("Запит методом POST з консп.", () => {
  const request = {
    method: "POST",
    url: "https://httpbin.org/post",
    failOnStatusCode: false,
  };

  it("код відповіді повинен бути 200", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
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

describe("Запит з query параметрами", () => {
  const request = {
    url: "https://httpbin.org/get",
    qs: {
      key: "value",
    },
    failOnStatusCode: false,
  };

  it("значення відповіді має бути value", () => {
    cy.request(request).then((response) => {
      assert.equal("value", response.body.args.key);
    });
  });
});
