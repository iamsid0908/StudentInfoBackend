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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const path_1 = __importDefault(require("path"));
const UserModel = require(path_1.default.join(__dirname, '../../models/user.model'));
const { ResponseWrapper } = require(path_1.default.join(__dirname, "../../utils/parser"));
const { UserService } = require(path_1.default.join(__dirname, "./user.service"));
const nodemailer = require('nodemailer');
require('dotenv').config();
function addUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = req.body;
        const response = yield UserService.addUser(params);
        return ResponseWrapper.success(res, response);
    });
}
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield UserService.getAllUsers();
        return ResponseWrapper.success(res, response);
    });
}
function updateUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = req.body;
        const response = yield UserService.updateUsers(params);
        return ResponseWrapper.success(res, response);
    });
}
function deleteUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const param = req.params.id;
        const response = yield UserService.deleteUsers(param);
        return ResponseWrapper.success(res, response);
    });
}
function sendemail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const realData = data;
            if (realData.length === 0) {
                res.send("please add some element");
                return;
            }
            console.log(realData);
            const promises = yield realData.map((id) => UserModel.findById(id));
            let finalData = [];
            yield Promise.all(promises)
                .then(results => {
                // 'results' is an array containing the results of all the findById operations
                finalData = results;
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
                to: "info@redpositive.in",
                subject: "How beutiful day today",
                text: `Data: ${JSON.stringify(finalData, null, 2)}`,
            };
            yield transporter.sendMail(mailOptions);
            res.status(200).send('Email sent successfully.');
        }
        catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email.');
        }
    });
}
exports.UserController = {
    addUser,
    getAllUsers,
    updateUsers,
    deleteUsers,
    sendemail
};
