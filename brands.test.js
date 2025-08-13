const request = require('supertest');

// Giả sử app là nơi bạn khởi động ứng dụng API trong repo giáo viên
const app = require('../server');  // Điều chỉnh theo đường dẫn đúng

describe('GET /brands/:id', () => {
  it('should return a brand by id', async () => {
    const id = 1;  // Dùng id mẫu để test
    const response = await request(app).get(`/brands/${id}`);  // Gửi yêu cầu GET đến API

    // Kiểm tra mã trạng thái HTTP
    expect(response.status).toBe(200);

    // Kiểm tra dữ liệu trả về (có id và name trong response)
    expect(response.body).toHaveProperty('id', id);
    expect(response.body).toHaveProperty('name');
  });
});
