import { Types } from "mongoose";

export interface User extends Document{
    _id?: Types.ObjectId;
    name: string;
    phoneNo:string
    email?: string;
    hobbies?:string;
   
}