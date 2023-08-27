"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require('path');
const user_routes_1 = __importDefault(require("../modules/user/user.routes"));
const globalRoutes = (0, express_1.Router)();
globalRoutes.get("/healthCheck", (req, res) => { res.status(200).send({ message: "working" }); });
globalRoutes.use("/user", user_routes_1.default);
exports.default = globalRoutes;
