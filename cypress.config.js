const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true, //вмикаю запис відео
  videoCompression: 16, // компресія(стискання об'єму відео за рахунок зменшення якості) за замовчуванням стоїть 32
  videoUploadOnPasses: false, // false, відео буде завантажуватися тільки в разі збою тесту або його неуспішного проходження.
});
