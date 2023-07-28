import app from "./app.js"

const port = 3000

console.log("STARTING APP")

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
