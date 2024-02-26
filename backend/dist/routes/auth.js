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
const express_1 = require("express");
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || '';
function createUser(user_data) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: user_data
        });
        return res;
    });
}
function loginUser(user_data) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: user_data
        });
        return res;
    });
}
function generatetoken(username) {
    const token = jsonwebtoken_1.default.sign({
        username
    }, JWT_SECRET);
    // console.log(JWT_SECRET);
    return token;
}
authRouter.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        username: req.body.username,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    };
    const dbcreate = yield createUser(user);
    const token = generatetoken(req.body.username);
    const result = {
        success: false,
        token: null,
        user
    };
    if (dbcreate) {
        result.success = true;
        result.token = token;
    }
    res.send(result);
}));
authRouter.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        username: req.body.username,
        password: req.body.password
    };
    const dbcheck = yield loginUser(user);
    const token = generatetoken(req.body.username);
    const result = {
        success: false,
        token: null,
        user
    };
    if (dbcheck) {
        result.success = true;
        result.token = token;
    }
    res.send(result);
}));
exports.default = authRouter;
