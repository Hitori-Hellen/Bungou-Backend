# Bungou-Backend

Backend project using nodejs Express with Swagger UI to display Api

## Installation

Install package.json by using pnpm
```bash
pnpm install
```

Next create database for project with sequelize-cli
```bash
npx sequelize-cli db:create
```

Migration
```bash
npx sequelize-cli db:migrate
```

## Import data to database

You can import dataset from datasetCleaned folder. 

## Run project
```bash
pnpm start
```