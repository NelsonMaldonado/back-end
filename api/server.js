const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const db = require("./data/db-config")
const usersRouter = require("./users/users-router")
const recipeRouter = require("./recipes/recipes-router")

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/users", usersRouter)
server.use("/api/recipes", recipeRouter)

// server.get("/", (req, res) => {
//   res.send("The / endpoint is working")
// })

module.exports = server
