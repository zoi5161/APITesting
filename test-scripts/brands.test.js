const request = require('supertest');

describe('GET /brands/:id', () => {
  it('should return a brand by id', async () => {
    const id = 1;
    const response = await request('http://localhost:8091').get(`/brands/${id}`);
    
    expect(response.status).toBe(200);  // Kiểm tra mã trạng thái HTTP
    expect(response.body).toHaveProperty('id', id);  // Kiểm tra `id` trong response
    expect(response.body).toHaveProperty('name');  // Kiểm tra `name` trong response
  });
});
