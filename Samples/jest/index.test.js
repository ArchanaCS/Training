const app = require("./index");
const supertest = require("supertest");
const request = supertest(app);

describe("gets the test endpoint", () => {
  test("return with status code 200", async () => {
    const req = {
      username: "Ravi",
      password: "1234",
    };
    const response = await request.post("/test").send(req);
    expect(JSON.stringify(response.body)).toBe(JSON.stringify([{ id: 1 }]));
  });
});
