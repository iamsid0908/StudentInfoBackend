import UserModel from "../../models/user.model";
import { ResponseWrapper } from "../../utils/parser";
import { UserService } from "./user.service"
import { Request,Response } from "express";
const nodemailer = require('nodemailer');
require('dotenv').config()

async function addUser(req: Request,res: Response) {
    const params = req.body
    const response = await UserService.addUser(params);
    return ResponseWrapper.success(res,response)
}

async function getAllUsers(req: Request,res: Response) {
    const response = await UserService.getAllUsers();
    return ResponseWrapper.success(res,response);
}

async function updateUsers(req: Request,res: Response) {
    const params = req.body;
    const response = await UserService.updateUsers(params);
    return ResponseWrapper.success(res,response)
}

async function deleteUsers(req: Request, res: Response) {
    const param = req.params.id;
    const response = await UserService.deleteUsers(param);
    return ResponseWrapper.success(res,response);
}

async function sendemail(req:Request,res:Response) {
  try {
    const data = req.body;
    const realData= data;
    if(realData.length===0){
      res.send("please add some element")
      return;
    }
    console.log(realData);

    const promises = await realData.map((id:any) => UserModel.findById(id));

    let finalData:any = []
   await Promise.all(promises)
  .then(results => {
    // 'results' is an array containing the results of all the findById operations
    finalData=results;
  })
  .catch(error => {
    console.error(error);
  });

  // Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: "chandrakarsiddharth854@gmail.com",
    subject: "How beutiful day today",
    text: `Data: ${JSON.stringify(finalData, null, 2)}`,
  };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email.');
  }
}

export const UserController = {
    addUser,
    getAllUsers,
    updateUsers,
    deleteUsers,
    sendemail
}