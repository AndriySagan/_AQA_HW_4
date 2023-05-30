// /api/users/2

describe("Запит методом POST на сайт https://reqres.in/ ", () => {
  it("значення відповіді має бути name: 'morpheus'", () => {
    cy.request({
      method: "POST", // при методі GET, цей рядок не потрібен, тому що цей тип запиту йде за замовчуванням
      url: "https://reqres.in/api/users",
      body: {
        name: "morpheus",
        job: "leader",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.name).to.equal("morpheus");
      expect(response.body.job).to.equal("leader");
      //expect є функцією, яка надає більш розширені можливості для тестування та перевірки значень. Використовуючи expect, ми можемо ланцюжити різні методи для визначення очікуваних результатів. Якщо умова не виконується, генерується помилка, але тест продовжує виконуватися, і можуть бути проведені додаткові перевірки.
    });
  });
});

describe("Запит методом POST на сайт https://reqres.in/ ", () => {
  const request = {
    method: "POST",
    url: "https://reqres.in/api/users",
    body: {
      name: "morpheus",
      job: "leader",
    },
    failOnStatusCode: false,
  };
  it("Перевірка формату відповіді (JSON/XML)", () => {
    cy.request("GET", "https://reqres.in/api/users").then((response) => {
      assert.ok(response.headers["content-type"].includes("application/json"));
    });
  });

  it("Перевірка наявності необхідних полів у відповіді", () => {
    cy.request("GET", "https://reqres.in/api/users").then((response) => {
      assert.ok(
        Array.isArray(response.body.data) && response.body.data.length > 0
      );
      // Перевірка інших необхідних полів у відповіді
      assert.ok(response.body.data[0].id);
      assert.ok(response.body.data[0].email);
    });
  });
});
