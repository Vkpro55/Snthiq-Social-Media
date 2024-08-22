import { Request, Response, NextFunction } from 'express';

const rateLimit = new Map<string, { count: number; lastRequest: number }>();

export const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
    const now = Date.now();
    const userIP = req.ip || ''; // Ensure userIP is always a string

    if (!userIP) {
        return next();
    }

    const userData = rateLimit.get(userIP) || { count: 0, lastRequest: now };

    if (now - userData.lastRequest > 60000) {
        userData.count = 1;
        userData.lastRequest = now;
    } else {
        userData.count += 1;
    }

    if (userData.count > 10) {
        return res.status(429).json({ message: 'Too many requests' });
    }

    rateLimit.set(userIP, userData);
    next();
};
