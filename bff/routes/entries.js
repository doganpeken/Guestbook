"use strict";

require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  // res.send({ message: `${restAPI}` });
  const response = await axios.get("http://10.0.136.151/guestbook/entries");
  console.log(response);
  res.send(response.data);
});

router.post("/", async (req, res) => {
  const entrie = req.body;
  if (entrie === undefined) {
    res.send("Bad request.").status(400);
    return;
  }
  let now = new Date();
  entrie.created = now.toISOString();
  const response = await axios.post(
    "http://10.0.136.151/guestbook/entries",
    entrie
  );
  res.status(response.status).send({ message: "OK" });
});

module.exports = router;
