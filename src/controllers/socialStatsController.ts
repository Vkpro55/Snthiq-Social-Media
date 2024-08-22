import { Request, Response } from 'express';
import { getCache, setCache } from '../utils/cache';
import { getTwitterData } from '../services/twitterService';
import { getInstagramData } from '../services/instagramService';

export const getSocialStats = async (req: Request, res: Response) => {
    const cacheKey = 'socialStats';
    const cachedData = getCache(cacheKey);

    if (cachedData) {
        return res.json(cachedData);
    }

    try {
        const twitterData = await getTwitterData();
        const instagramData = await getInstagramData();
        const aggregatedData = {
            twitter: twitterData,
            instagram: instagramData,
        };

        setCache(cacheKey, aggregatedData, Number(process.env.CACHE_DURATION));
        res.json(aggregatedData);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};


export const getPlatformStats = async (req: Request, res: Response) => {
    console.log('Request received'); // Test if this is printed

    const { platform } = req.params;
    const cacheKey = `platformStats_${platform}`;
    const cachedData = getCache(cacheKey);

    if (cachedData) {
        return res.json(cachedData);
    }

    try {
        let data;
        if (platform === 'twitter') {
            data = await getTwitterData();
        } else if (platform === 'instagram') {
            data = await getInstagramData();
        } else {
            return res.status(400).json({ message: 'Invalid platform' });
        }

        setCache(cacheKey, data, Number(process.env.CACHE_DURATION));
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

