"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimiter = void 0;
const rateLimit = new Map();
const rateLimiter = (req, res, next) => {
    const now = Date.now();
    const userIP = req.ip || ''; // Ensure userIP is always a string
    if (!userIP) {
        return next();
    }
    const userData = rateLimit.get(userIP) || { count: 0, lastRequest: now };
    if (now - userData.lastRequest > 60000) {
        userData.count = 1;
        userData.lastRequest = now;
    }
    else {
        userData.count += 1;
    }
    if (userData.count > 10) {
        return res.status(429).json({ message: 'Too many requests' });
    }
    rateLimit.set(userIP, userData);
    next();
};
exports.rateLimiter = rateLimiter;
