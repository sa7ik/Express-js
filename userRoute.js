const express = require("express")
const userRoute = express.Router();
const controller = require("../Express js/Controller/UserForm")

userRoute.post("/user/login", controller.userRegister)
userRoute.get("/user/login", controller.allUsers)
userRoute.get("/user/login", controller.userById)
userRoute.put("/user/login/:id", controller.update)
userRoute.delete("/user/login/:id", controller.deleteUser)

module.exports = userRoute
