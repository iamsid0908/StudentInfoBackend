import { Router } from "express"
import userRouter from "../modules/user/user.routes";
 
const globalRoutes = Router();

globalRoutes.get("/healthCheck",(req,res)=>{ res.status(200).send({message:"working"})});

globalRoutes.use("/user",userRouter)

export default globalRoutes;
