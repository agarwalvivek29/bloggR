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
const client_1 = require("@prisma/client");
const express_1 = require("express");
const auth_1 = __importDefault(require("../middlewares/auth"));
const createRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
function createBlog(blog) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.blog.create({
            data: {
                title: blog.title,
                content: blog.content,
                author: blog.author
            }
        });
        return res;
    });
}
createRouter.post('/', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };
    const blogcreate = yield createBlog(blog);
    const result = {
        success: false,
        error: "Internal Server error",
        blogcreate
    };
    if (blogcreate) {
        result.success = true;
        result.error = '';
    }
    res.send(result);
}));
exports.default = createRouter;
