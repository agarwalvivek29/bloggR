"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware = (req, res, next) => {
    next();
};
// Error
// Type '(req: Request, res: Response, next: NextFunction) => void' is not assignable to type 'RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>'.
//   Types of parameters 'req' and 'req' are incompatible.
//     Type 'Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>' is missing the following properties from type 'Request': cache, credentials, destination, integrity, and 13 more.ts(2322)
exports.default = authMiddleware;
