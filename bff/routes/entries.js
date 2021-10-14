"use strict";

require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const response = await axios.get(
    "http://guestbookapi-service/guestbook/entries"
  );
  res.send(response.data);
});

router.post("/", async (req, res) => {
  const entrie = req.body;
  if (entrie === undefined) {
    res.send("Bad request.").status(400);
    return;
  }
  const response = await axios.post(
    "http://guestbookapi-service/guestbook/entries",
    entrie
  );
  res.status(response.status).send({ message: "OK" });
});

module.exports = router;
