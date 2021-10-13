"use strict";

require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  // res.send({ message: `${restAPI}` });
  const response = await axios.get(
    "http://nginx-guestbookapi/guestbook/entries"
  );
  res.send(response.data);
});

router.get("/test", async (req, res) => {
  // res.send({ message: `${restAPI}` });
  const response = await axios.get(
    "http://guestbookapi-service/guestbook/entries"
  );
  res.send(response.data);
});

router.get("/test2", async (req, res) => {
  // res.send({ message: `${restAPI}` });
  const response = await axios.get("http://20.79.225.113/guestbook/entries");
  res.send(response.data);
});

router.post("/", async (req, res) => {
  const entrie = req.body;
  if (entrie === undefined) {
    res.send("Bad request.").status(400);
    return;
  }
  // let now = new Date();
  // entrie.created = now.toISOString();
  const response = await axios.post(
    "http://10.0.117.173/guestbook/entries",
    entrie
  );
  res.status(response.status).send({ message: "OK" });
});

module.exports = router;
