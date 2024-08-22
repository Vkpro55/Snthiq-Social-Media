"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === process.env.API_KEY) {
        return next();
    }
    res.status(401).json({ message: 'Unauthorized' });
};
exports.authMiddleware = authMiddleware;
