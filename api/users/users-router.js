const router = require("express").Router()
const model = require("./users-model")

router.get("/", (req, res) => {
  res.send("getting all users")
})

router.post("/register", (req, res) => {
  res.status(201).send("user registered")
})

// server.get("/api/users", async (req, res) => {
//     res.json(await getAllUsers())
//   })

//   server.post("/api/users", async (req, res) => {
//     res.status(201).json(await insertUser(req.body))
//   })
module.exports = router
