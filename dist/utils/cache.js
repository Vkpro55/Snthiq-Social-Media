"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCache = exports.getCache = void 0;
const cache = new Map();
const getCache = (key) => {
    const cached = cache.get(key);
    if (cached && cached.expiry > Date.now()) {
        return cached.data;
    }
    cache.delete(key);
    return null;
};
exports.getCache = getCache;
const setCache = (key, data, duration) => {
    cache.set(key, { data, expiry: Date.now() + duration });
};
exports.setCache = setCache;
