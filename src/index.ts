import express, { Request, Response } from "express"

const app = express()

app.get("/", (req: Request, res: Response) => {
  return res.json({
    status: "success",
    result: "we did it!",
  })
})

app.listen(3000, () => console.log("listing on port 3000"))
