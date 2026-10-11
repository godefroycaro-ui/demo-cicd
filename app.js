const express = require("express");
const app = express();

app.get("/health", (_, res) => res.json({ status: "ok" }));

app.get("/info", (_, res) =>
  res.json({
    env: process.env.APP_ENV || "local",
    version: process.env.APP_VERSION || "dev",
  })
);

module.exports = app;