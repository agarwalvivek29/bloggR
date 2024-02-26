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
const client_1 = require("@prisma/client");
const express_1 = require("express");
const blogRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
function allblogs() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.blog.findMany();
        return res;
    });
}
function blogs(author) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.blog.findMany({
            where: {
                author
            }
        });
        return res;
    });
}
blogRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield allblogs();
    res.send(result);
}));
blogRouter.get('/:author', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs(req.params.author);
    res.send(result);
}));
exports.default = blogRouter;
