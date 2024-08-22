import request from 'supertest';
import app from '../src/app';
import server from '../src/server';

describe('Social Media Aggregation API', () => {
    afterAll((done) => {
        server.close(done); // Close the server after all tests are done
    });

    it('should return aggregated social media stats', async () => {
        const response = await request(app)
            .get('/api/social-stats');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('twitter');
        expect(response.body).toHaveProperty('instagram');
    });

    it('should return detailed stats for Twitter', async () => {
        const response = await request(app)
            .get('/api/platform/twitter');

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('should return detailed stats for Instagram', async () => {
        const response = await request(app)
            .get('/api/platform/instagram');

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('should return 400 for invalid platform', async () => {
        const response = await request(app)
            .get('/api/platform/unknown');

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Invalid platform');
    });

    it('should return 429 for too many requests', async () => {
        for (let i = 0; i < 11; i++) {
            await request(app).get('/api/social-stats');
        }

        const response = await request(app).get('/api/social-stats');
        expect(response.status).toBe(429);
    }, 10000);  // Increased timeout to 10 seconds
});
