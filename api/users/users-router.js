const router = require("express").Router()
const model = require("./users-model")

router.get("/", (req, res) => {
  res.send("getting all users")
})
// router.get("/", async (req, res) => {
//     res.json(await getAllUsers())
//   })

router.post("/register", (req, res) => {
  res.send("user registered")
})

//   server.post("/api/users", async (req, res) => {
//     res.status(201).json(await insertUser(req.body))
//   })
module.exports = router
