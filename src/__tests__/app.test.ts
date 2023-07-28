import app from "../app"
import request from "supertest"

describe("GET /", () => {
  it("should respond with 'we did it!'", async () => {
    const response = await request(app).get("/")
    expect(response.status).toBe(200)
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    )
    expect(response.body.success).toBeDefined()
    expect(response.body.success).toBe(true)
    expect(response.body.message).toBeDefined()
    expect(response.body.message).toBe("we did it!")
  })
})
