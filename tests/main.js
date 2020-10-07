import assert from "assert";
const jwt = require('jsonwebtoken');

describe("simple-todos-react2", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "simple-todos-react2");
  });

  it("decode jwt token", async function () {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiIxOTMyYWI0NS02ZTY1LTQwYzAtYjRhMS1jMWY1M2RhNjk4ZmYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wYjNkNjUwZi03NTJlLTRmMDQtYjY3My1jYjc5MGIwNDQwZGUvIiwiaWF0IjoxNjAxODg5ODQyLCJuYmYiOjE2MDE4ODk4NDIsImV4cCI6MTYwMTg5Mzc0MiwiYWlvIjoiRTJSZ1lKamphNjlmTDhGK3pMTnpWKyswaFFlVjU0Z1g2ZmxHcnN5MUNseW12NGY3WFE0QSIsImFtciI6WyJwd2QiXSwiZmFtaWx5X25hbWUiOiJGZXJuYW5kZXMiLCJnaXZlbl9uYW1lIjoiR2lsIiwiaXBhZGRyIjoiMTkzLjExNy4xMjguMjIyIiwibmFtZSI6ImdpbGYiLCJub25jZSI6Ijg3M2E1ODZlNGU3NzQ0ODI5NTczNDFhNjgxMGQ5ZmEyXzIwMjAxMDA1MDkzMzU3Iiwib2lkIjoiNDJlY2QyZGQtNWIyZi00ZjM4LWI2YTYtYTBhMWEyNTZmMGIyIiwicmgiOiIwLkFBQUFEMlU5Q3k1MUJFLTJjOHQ1Q3dSQTNrV3JNaGxsYnNCQXRLSEI5VDJtbVA4d0FFWS4iLCJzdWIiOiJ2NnNIbzlpZUI2WHh1ck90bVVkaTNma19vNjJBTE1Fd1RTdUVnSzNMS0hjIiwidGlkIjoiMGIzZDY1MGYtNzUyZS00ZjA0LWI2NzMtY2I3OTBiMDQ0MGRlIiwidW5pcXVlX25hbWUiOiJnaWxmQG9uZXBvaW50Y29uc3VsdGluZy5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJnaWxmQG9uZXBvaW50Y29uc3VsdGluZy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJscG9jcTRQbmdrR1d1NmZ3UVhyb0FRIiwidmVyIjoiMS4wIn0.m5hxZH6q7d3l_vQEKccb5iQATN5DFqrxEeWDdIvcOkYgb9iHKhS32q7LWX9v19cXGyxx-Xm0YejcMncsDV71yZD17OZ3d0C5EiArf4WBQbQrzwFfSDezybyKe8eaC5IYBEgSwEaKeBcCMQLETNr_TTeuswpoYz10h8HqlLKV9yeTqBy4ktemfQAWCrhsKhakoq-fb15rRyg8bIGkGLaXaxL16nJh9cpuXwAMqlIB6dXC0zpcNyEenduji_t3UmJWKCo7-0b8Hsy7r4KGhj-FLdKwZGxE1Ogi2oeZNvIR0WZ2Huy0Ax814A3LPdZHxzfjRX2SQPiHy3slTUyAh44rKg";
    const decoded2 = jwt.decode(token, {complete: true});
    const signature = decoded2.signature;
    console.log(decoded2);
    console.log(signature);
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
