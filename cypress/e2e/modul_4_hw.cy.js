describe("#1 Запит методом POST на сайт https://reqres.in/ ", () => {
  const nevUser = {
    name: "artyr",
    job: "leader",
  };
  const request = {
    method: "POST",
    url: "https://reqres.in/api/users",
    failOnStatusCode: false,
    body: nevUser,
  };
  it("створюємо користувача name: 'artyr', та виводимо значення 'id' та 'createdAt' ", () => {
    cy.request(request).then((response) => {
      cy.log("response", response);
      assert.equal(201, response.status);
      assert.equal("artyr", response.body.name);
      assert.equal("leader", response.body.job);
      const id = response.body.id; // Отримання id з відповіді
      const createdAt = response.body.createdAt; // Отримання createdAt з відповіді
      cy.log("id", id);
      cy.log("createdAt", createdAt);
      assert.isTrue(response.duration <= 1000); // Перевірка тривалості виконання запиту.
    });
  });
});

describe("#2 Запит методом GET на сайт https://reqres.in/ ", () => {
  const request = {
    method: "GET",
    url: "https://reqres.in/api/register",
    headers: {
      email: "eve.holt@reqres.in",
      password: "pistol",
      "user-agent":
        "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
    },
    failOnStatusCode: false,
  };

  it("реєстрація, надсилання user-agent, код відповіді - 200, отримання id", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("eve.holt@reqres.in", response.requestHeaders.email);
      assert.equal(
        "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
        response.requestHeaders["user-agent"]
      );
      const id = response.body.id;
      cy.log("id", id);
      assert.isTrue(response.duration <= 150);
    });
  });
});

describe("#3 Запит методом POST на сайт https://reqres.in/ ", () => {
  const login = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };
  const request = {
    method: "POST",
    url: "https://reqres.in/api/login",
    body: login,
    headers: {
      Cookie: "email=eve.holt@reqres.in",
    },
    failOnStatusCode: false,
  };

  it("логінізація, надсилання cookie та отримання 'token'", () => {
    cy.request(request).then((response) => {
      cy.log("response", response);
      assert.equal(200, response.status);
      assert.equal(
        "email=eve.holt@reqres.in",
        response.requestHeaders["Cookie"]
      );
      const token = response.body.token;
      cy.log("token", token);
    });
  });
});

describe("#4 Запит методом PATCH на сайт https://reqres.in/ ", () => {
  const user = {
    name: "morpheus",
    job: "pion resident",
  };
  const request = {
    method: "PATCH",
    url: "https://reqres.in/api/users/2",
    failOnStatusCode: false,
    body: user,
  };
  it("оновлюємо данні користувача name: 'morpheus', та виводимо значення 'id' та 'updatedAt' ", () => {
    cy.request(request).then((response) => {
      cy.log("response", response);
      assert.equal(200, response.status);
      assert.equal("morpheus", response.body.name);
      assert.equal("pion resident", response.body.job);
      const updatedAt = response.body.updatedAt;
      cy.log("updatedAt", updatedAt);
      assert.isTrue(response.duration <= 150);
    });
  });
});

describe("#5 Запит методом DELETE на сайт https://reqres.in/ ", () => {
  const request = {
    method: "DELETE",
    url: "https://reqres.in/api/users/2",
    failOnStatusCode: false,
  };
  it("видаляємо користувача, надсилаємо user-agent", () => {
    cy.request(request).then((response) => {
      cy.log("response", response);
      assert.equal(204, response.status);
      assert.isTrue(response.duration <= 150);
    });
  });
});

describe("#6 Запит методом PUT на сайт https://reqres.in/ ", () => {
  const user = {
    name: "Tomas",
    job: "student",
  };
  const request = {
    method: "PUT",
    url: "https://reqres.in/api/users/2",
    failOnStatusCode: false,
    body: user,
  };
  it("оновлюємо данні користувача name: 'Tomas', та виводимо значення 'id' та 'updatedAt' ", () => {
    cy.request(request).then((response) => {
      cy.log("response", response);
      assert.equal(200, response.status);
      assert.equal("Tomas", response.body.name);
      assert.equal("student", response.body.job);
      const updatedAt = response.body.updatedAt;
      cy.log("updatedAt", updatedAt);
      assert.isTrue(response.duration <= 150);
    });
  });
});

describe("#7 Запит методом GET на сайт https://tenders.guru/pl/api ", () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  it("Отримайте розширений набір даних для тендеру, отримання id та description", () => {
    for (let index = 0; index < 2; index++) {
      const randomId = getRandomInt(5830);

      const request = {
        method: "GET",
        url: "https://tenders.guru/api/pl/tenders/",
        tender_id: randomId,
        failOnStatusCode: false,
      };

      cy.request(request).then((response) => {
        assert.isTrue(response.status == 200);
        const id = response.body.data[1].id;
        cy.log("id", id);
        cy.log(`ID: ${randomId}`);
        cy.log("request", request);
        cy.log("response", response);
        cy.log("page_number", response.body.page_number);
        cy.log("description:", response.body.data[1].description);
      });
    }
  });
});

describe("#8 Запит методом GET на сайт https://catboys.com/api ", () => {
  const request = {
    method: "GET",
    url: "https://api.catboys.com/catboy",
    failOnStatusCode: false,
  };

  it("Повертає випадкову фразу", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);

      cy.log("response", response.body);
      assert.isTrue(response.duration <= 1000);
    });
  });
});

describe("#9 Запит методом PUT на сайт https://api.myanimelist.net ", () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  it("Оновити статус списку аніме по рандомному id", () => {
    for (let index = 0; index < 2; index++) {
      const anime_id = getRandomInt(100000);

      const request = {
        method: "PUT",
        url: `https://api.myanimelist.net/v2 /anime/${anime_id}/my_list_status`,
        failOnStatusCode: false,
      };

      cy.request(request).then((response) => {
        assert.isTrue(response.status == 403);
        cy.log("request", request);
        cy.log("response", response);
        cy.log(
          "response_status_statusText",
          response.status,
          response.statusText
        );
        assert.isTrue(response.duration <= 1000);
      });
    }
  });
});

describe("#10 Запит методом PUT на сайт https://api.myanimelist.net ", () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  it("Оновити статус списку аніме по вказаному id", () => {
    const anime_id = 17074;

    const request = {
      method: "PUT",
      url: `https://api.myanimelist.net/v2 /anime/${anime_id}/my_list_status`,
      failOnStatusCode: false,
    };

    cy.request(request).then((response) => {
      assert.isTrue(response.status == 403);
      cy.log("request", request);
      cy.log("response", response);
      cy.log(
        "response_status_statusText",
        response.status,
        response.statusText
      );
      assert.isTrue(response.duration <= 1000);
    });
  });
});

//   const id = response.body.id; // Отримання id з відповіді
//   cy.log(`page_number: ${randomPage}`);
//   cy.log("request", request);
//   cy.log("response", response);
//   cy.log("id", id);
//   cy.log("page_number", response.body.page_number);
// curl 'https://api.myanimelist.net/v2/anime/17074/my_list_status' \
// -X PUT \
// -d status=completed \
// -d score=8 \
// -d num_watched_episodes=3 \
// -H 'Authorization: Bearer YOUR_TOKEN'

// describe("#?????7 Запит методом GET на сайт https://tenders.guru/pl/api", () => {
//   function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

//   it("Отримайте розширений набір даних для тендеру, отримання id", () => {
//     const tenderIds = Array.from(
//       { length: 10 },
//       (_, index) => 570000 + index * 7
//     );

//     cy.wrap(tenderIds).each((tenderId) => {
//       const randomId = getRandomInt(1000000);

//       const request = {
//         method: "GET",
//         url: `https://tenders.guru/api/pl/tenders/${tenderId}`,
//         qs: {
//           id: randomId,
//         },
//         failOnStatusCode: false,
//       };

//       cy.request(request).then((response) => {
//         assert.isTrue(response.status === 200);
//         cy.log("request", request);
//         cy.log("response", response);
//       });
//     });
//   });
// });

// describe("#7 Запит методом GET на сайт https://tenders.guru/pl/api ", () => {
//   function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   it("Отримайте розширений набір даних для тендеру, отримання id", () => {
//     const ids = [];
//     while (ids.length < 10) {
//       const randomId = getRandomInt(57000, 100000);
//       if (!ids.includes(randomId)) {
//         ids.push(randomId);

//         const request = {
//           method: "GET",
//           url: `https://tenders.guru/api/pl/tenders/${randomId}`,
//           failOnStatusCode: false,
//         };

//         cy.request(request).then((response) => {
//           assert.isTrue(response.status === 200);
//           cy.log(`ID: ${randomId}`);
//           cy.log("response", response);
//         });
//       }
//     }
//   });
// });
