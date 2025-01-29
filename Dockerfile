# Используем официальный образ Node.js
FROM node:latest

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы приложения
COPY . .

# Команда для запуска приложения
CMD ["node", "app.js"]