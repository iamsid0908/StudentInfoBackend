"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const path = require("path");
const UserModel = require(path.join(__dirname, "../../models/user.model"));
function addUser(params) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(params);
        return UserModel.create(params);
    });
}
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return UserModel.find({}).lean();
    });
}
function updateUsers(params) {
    return __awaiter(this, void 0, void 0, function* () {
        return UserModel.findOneAndUpdate({ _id: params.userId }, params.data).lean();
    });
}
function deleteUsers(param) {
    return __awaiter(this, void 0, void 0, function* () {
        return UserModel.findOneAndRemove({ _id: param });
    });
}
exports.UserService = {
    addUser,
    getAllUsers,
    updateUsers,
    deleteUsers
};
