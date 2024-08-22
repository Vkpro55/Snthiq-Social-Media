import express from 'express';
import path from 'path';
import cors from 'cors'
import { rateLimiter } from './middlewares/rateLimiter';
import { getSocialStats, getPlatformStats } from './controllers/socialStatsController';

const app = express();

app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/social-stats', getSocialStats);
app.get('/api/platform/:platform', getPlatformStats);

export default app;
