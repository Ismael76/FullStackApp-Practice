const app = require("express");

const cors = require("cors");

const drinkController = require("./controller/drink");

app.use(cors());

app.use("/", drinkController);

module.exports = app;
