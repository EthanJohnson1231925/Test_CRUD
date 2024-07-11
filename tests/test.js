const request = require('supertest');
const app = require('../app'); // Import your Express app
const connectDB = require('../config/db');
const mongoose = require("mongoose");

describe('CRUD Operations', () => {
  let createdTransactionId;

  beforeAll(async () => {
    connectDB();
  });

  jest.useRealTimers();
  test('Create new Transaction', async () => {
    const response = await request(app)
      .post('/api/v1/test/transactions')
      .send({ amount: 1000, description: "This is a test Transaction", date: "2024/7/10" });
    
    expect(response.status).toBe(200);
    createdTransactionId = response.body.data._id; // Store the ID of the created item
  }, 20000);

  test('Get Transaction by ID', async () => {
    const response = await request(app).get(`/api/v1/test/transactions/${createdTransactionId}`);
    
    expect(response.status).toBe(200);
    expect(response.body.data.description).toBe('This is a test Transaction');
    expect(response.body.data.amount).toBe(1000);
  });

  test('Get all Transactions', async () => {
    const response = await request(app).get('/api/v1/test/transactions');

    expect(response.status).toBe(200);
    expect(response.body.data).toBeInstanceOf(Array);
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  test('Update Transaction', async () => {
    const response = await request(app)
      .put(`/api/v1/test/transactions/${createdTransactionId}`)
      .send({ amount: 1001, description: "This is a updated test Transaction", date: "2024/7/11" });

    expect(response.status).toBe(200);
  });

  test('Delete Transaction', async () => {
    const response = await request(app).delete(`/api/v1/test/transactions/${createdTransactionId}`);
    
    expect(response.status).toBe(200);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});