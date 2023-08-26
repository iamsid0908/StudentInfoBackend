import {Router} from "express"
import { UserController } from "./user.controller"

const userRouter = Router()

userRouter.post("/createUser", UserController.addUser);
userRouter.get("/getAllUsers", UserController.getAllUsers);
userRouter.put("/updateUsers", UserController.updateUsers);
userRouter.delete("/deleteUsers/:id", UserController.deleteUsers);
userRouter.post("/sendemail", UserController.sendemail);

export default userRouter;