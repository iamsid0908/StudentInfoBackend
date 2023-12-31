"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require("path");
const { UserController } = require(path.join(__dirname, "./user.controller"));
const userRouter = (0, express_1.Router)();
userRouter.post("/createUser", UserController.addUser);
userRouter.get("/getAllUsers", UserController.getAllUsers);
userRouter.put("/updateUsers", UserController.updateUsers);
userRouter.delete("/deleteUsers/:id", UserController.deleteUsers);
userRouter.post("/sendemail", UserController.sendemail);
exports.default = userRouter;
