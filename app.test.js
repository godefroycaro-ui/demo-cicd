const request = require("supertest");
const app = require("./app");

test("health", async () => {
  const r = await request(app).get("/health");
  expect(r.body.status).toBe("ok");
});

test("info annonce l'environnement local par défaut", async () => {
  const r = await request(app).get("/info");
  expect(r.body.env).toBe("local");
});