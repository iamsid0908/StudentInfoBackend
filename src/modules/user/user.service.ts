import UserModel from "../../models/user.model";
import { AddUserReq, UpdateUserReq} from "./types";



async function addUser(params: AddUserReq) {
    console.log(params)
    return UserModel.create(params);
}

async function getAllUsers() {
    return UserModel.find({}).lean();
}

async function updateUsers(params: UpdateUserReq) {
    return UserModel.findOneAndUpdate({_id:params.userId}, params.data).lean();
}

async function deleteUsers(param:any) {
    return UserModel.findOneAndRemove({_id:param});
}


export const UserService = {
    addUser,
    getAllUsers,
    updateUsers,
    deleteUsers
}