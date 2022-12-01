const addDays = require("date-fns/addDays");

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const result = addDays(new Date(), 100);
  response.send(
    `${result.getDate()}/${result.getMonth()}/${result.getFullYear()}`
  );
});

module.exports = app;
