const request = require('supertest');
const app = require('../../app');

describe('Test the category CRUD routes', () => {
    test('Fail to create category', async () => {
        const response = await request(app).post('/api/category').send(
            {
                description: 'The category description',
                name: '',
            },
        );
        expect(response.statusCode).toBe(400);
    });
    test('create category', async () => {
        const response = await request(app).post('/api/category').send(
            {
                description: 'The category description',
                name: 'Bike',
            },
        );
        expect(response.statusCode).toBe(201);
        expect(response.body).toMatchObject({
            description: 'The category description',
            createdAt: expect.any(String),
            id: expect.any(String),
            name: 'Bike',
            updatedAt: expect.any(String),
        });
    });
    test('Get all categories', async () => {
        const response = await request(app).get('/api/category');
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject([
            {
                description: 'The category description',
                createdAt: expect.any(String),
                id: expect.any(String),
                name: 'Bike',
                updatedAt: expect.any(String),
            },
        ]);
    });
});
