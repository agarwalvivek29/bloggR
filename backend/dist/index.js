"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_1 = __importDefault(require("./routes/auth"));
const create_1 = __importDefault(require("./routes/create"));
const blog_1 = __importDefault(require("./routes/blog"));
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((err, req, res, next) => {
    console.log(err);
    res.send({
        success: false,
        err
    });
});
app.use('/', blog_1.default);
app.use('/auth', auth_1.default);
app.use('/create', create_1.default);
app.listen(port, () => {
    console.log(`Server active on port ${port}`);
});
