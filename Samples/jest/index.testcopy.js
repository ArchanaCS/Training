
const app = require("./index");
const supertest = require("supertest");
const request = supertest(app);

describe("gets the test endpoint", () => {
    test("return with status code 200",async()=>{
    const response = await request.post("/test");
    expect(response.body.message).toBe("pass!");
})
  });



  
   