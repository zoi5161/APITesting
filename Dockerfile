# Sử dụng image Node.js từ Docker Hub
FROM node:16

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào trong container
COPY . .

# Mở cổng mà ứng dụng sẽ chạy (8091 cho API)
EXPOSE 8091

# Chạy ứng dụng
CMD ["npm", "start"]
