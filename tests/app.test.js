const request = require('supertest');
const app = require('../src/index');

describe('GET /hello', () => {
  it('should return hello message', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello, CI/CD!'); // ✅ single quotes
  });
});

