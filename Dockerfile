# Используем образ node
FROM node:18-alpine

# Создаем директорию приложения
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем файлы проекта
COPY . .

# Собираем проект (если необходимо)
RUN npm run build

# Открываем порт приложения
EXPOSE 3000

# Команда запуска приложения
CMD ["npm", "run", "start:dev"]
