require("dotenv").config();
require("express-async-errors");
const express = require("express");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const app = express();

const mongoConnect = require("./utils/mongoConnect");

mongoConnect();

app.use(express.json());

mongoose.connection.once("open", () => {
  console.log("Connected to db!");
  app.listen(PORT, () => {
    console.log(`Server started on PORT:${PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
