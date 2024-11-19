import app from "../server";
import supertest from "supertest";

describe("routes", () => {
  it("should return 200 when user is created", async () => {
    const res = await supertest(app).post("/register").send({
      username: "test",
      password: "test",
    });

    expect(res.status).toBe(201);
  });

  it("should return 200 when user is singed in", async () => {
    const res = await supertest(app).post("/register").send({
      username: "test",
      password: "test",
    });

    const token = res.body.token;

    const res2 = await supertest(app).post("/signin").send({
      username: "test",
      password: "test",
    });

    expect(res2.status).toBe(200);
    expect(res2.body.token).toBe(token);
  });
});
