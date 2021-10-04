"use strict";

const request = require("supertest");

let server;

describe("/", () => {
  beforeEach(() => {
    server = require("../../index");
  });

  describe("GET /", () => {
    it("should return the frontend", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
  });

  afterAll((done) => {
    server.close();
    done();
  });
});

describe("/guestbook/entries", () => {
  beforeEach(() => {
    server = require("../../index");
  });

  describe("GET /", () => {
    it("should return all entries", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
  });

  afterAll((done) => {
    server.close();
    done();
  });
});
