import express, { Request, Response } from "express"

const app = express()

app.use(express.static("public"))

app.get("/", (req: Request, res: Response) => {
  return res.json({
    success: true,
    message: "we did it!",
  })
})

export default app
