const request = require('supertest');
const app = require('../../app');

describe('Test the product CRUD routes', () => {
    test('Fail to create product', async () => {
        const response = await request(app).post('/api/product').send(
            {
                name: 'Bike',
                color: 'GOLD',
                description: 'The product description',
                price: 899,
            },
        );
        expect(response.statusCode).toBe(500);
    });
    test('create product', async () => {
        const response = await request(app).post('/api/product').send(
            {
                name: 'Bike',
                color: 'RED',
                description: 'The product description',
                price: 899,
            },
        );
        expect(response.statusCode).toBe(201);
        expect(response.body).toMatchObject({
            color: 'RED',
            category: null,
            createdAt: expect.any(String),
            description: 'The product description',
            id: expect.any(String),
            name: 'Bike',
            price: 899,
            updatedAt: expect.any(String),
        });
    });
    test('Get all products', async () => {
        const response = await request(app).get('/api/product');
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject([
            {
                color: 'RED',
                category: null,
                createdAt: expect.any(String),
                description: 'The product description',
                id: expect.any(String),
                name: 'Bike',
                price: 899,
                updatedAt: expect.any(String),
            },
        ]);
    });
});
