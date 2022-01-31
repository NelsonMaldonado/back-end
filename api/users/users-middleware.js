const model = require("./users-router")

const registerPayload = (req, res, next) => {
  console.log("Checking username phone number and more")
  next()
}

module.exports = {
  registerPayload,
}
