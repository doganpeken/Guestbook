"use strict";

require("dotenv").config();
const axios = require("axios");

const restAPI = process.env.REST_API;

describe("", () => {
  beforeEach(() => {});

  it("can get all entries", async () => {
    const response = await axios.get(`${restAPI}/guestbook/entries`);
    expect(response.status).toEqual(200);
  });

  afterAll((done) => {
    done();
  });
});
