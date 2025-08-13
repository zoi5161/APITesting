module.exports = {
  testEnvironment: 'node',          // Chạy tests trong môi trường Node.js
  verbose: true,                   // Hiển thị chi tiết kết quả test
  testMatch: [
    "**/tests/**/*.test.js"        // Tìm kiếm các file test trong thư mục tests
  ],
  collectCoverage: true,           // Thu thập thông tin coverage
  coverageDirectory: "coverage",   // Lưu trữ thông tin coverage vào thư mục 'coverage'
};
