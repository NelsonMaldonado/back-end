const router = require("express").Router()

router.get("/", (req, res) => {
  res.send("All the recipes are here")
})

router.post("/upload", (req, res) => {
  res.send("You have uploaded a recipe")
})

module.exports = router
