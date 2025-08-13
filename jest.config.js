module.exports = {
  testEnvironment: 'node',
  verbose: true,
  testMatch: [
    "**/test-scripts/**/*.test.js",  // Đảm bảo Jest tìm kiếm trong thư mục chứa test scripts
  ],
  collectCoverage: true,
  coverageDirectory: "coverage",
};
