const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
    it('debe responder con Hola Mundo DevOps', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('Hola Mundo DevOps');
    });
});