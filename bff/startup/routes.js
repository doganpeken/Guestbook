"use strict";

const express = require("express");
const entries = require("../routes/entries");
const path = require("path");

module.exports = function (app) {
  app.use(express.json());
  app.use(express.static("../frontend/build"));
  app.use(express.json());
  app.use("/guestbook/entries", entries);
  app.get("/", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../../", "frontend/build", "/index.html")
    );
  });
};
