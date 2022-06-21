const express = require("express");
const app = express();
const date = new Date();
app.get("/", (request, response) => {
  response.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
});

module.exports = app;
