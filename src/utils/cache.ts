const cache: Map<string, { data: any; expiry: number }> = new Map();

export const getCache = (key: string) => {
    const cached = cache.get(key);
    if (cached && cached.expiry > Date.now()) {
        return cached.data;
    }
    cache.delete(key);
    return null;
};

export const setCache = (key: string, data: any, duration: number) => {
    cache.set(key, { data, expiry: Date.now() + duration });
};
