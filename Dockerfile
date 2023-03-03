FROM node:18
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx sequelize-cli db:create
RUN npx sequelize-cli db:migrate --migrations-path /app/src/migrations

EXPOSE 8000

CMD ["nodemon", "index.js"]