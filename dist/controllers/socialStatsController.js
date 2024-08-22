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
exports.getPlatformStats = exports.getSocialStats = void 0;
const cache_1 = require("../utils/cache");
const twitterService_1 = require("../services/twitterService");
const instagramService_1 = require("../services/instagramService");
const getSocialStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cacheKey = 'socialStats';
    const cachedData = (0, cache_1.getCache)(cacheKey);
    if (cachedData) {
        return res.json(cachedData);
    }
    try {
        const twitterData = yield (0, twitterService_1.getTwitterData)();
        const instagramData = yield (0, instagramService_1.getInstagramData)();
        const aggregatedData = {
            twitter: twitterData,
            instagram: instagramData,
        };
        (0, cache_1.setCache)(cacheKey, aggregatedData, Number(process.env.CACHE_DURATION));
        res.json(aggregatedData);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getSocialStats = getSocialStats;
const getPlatformStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Request received'); // Test if this is printed
    const { platform } = req.params;
    const cacheKey = `platformStats_${platform}`;
    const cachedData = (0, cache_1.getCache)(cacheKey);
    if (cachedData) {
        return res.json(cachedData);
    }
    try {
        let data;
        if (platform === 'twitter') {
            data = yield (0, twitterService_1.getTwitterData)();
        }
        else if (platform === 'instagram') {
            data = yield (0, instagramService_1.getInstagramData)();
        }
        else {
            return res.status(400).json({ message: 'Invalid platform' });
        }
        (0, cache_1.setCache)(cacheKey, data, Number(process.env.CACHE_DURATION));
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getPlatformStats = getPlatformStats;
