# Sử dụng image chính thức của Node.js
FROM node:16

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Mở cổng cho API (8091)
EXPOSE 8091

# Lệnh để khởi động ứng dụng (ví dụ: node index.js hoặc app.js)
CMD ["npm", "start"]
