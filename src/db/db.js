const { Sequelize } = require("sequelize");

export const dbConfig = new Sequelize("DOAN", "root", "Khai141296", {
  host: "localhost",
  dialect: "mysql",
});
// DB_USERNAME=root
// DB_PASSWORD=Khai141296
// DB_NAME=3d-local-test
// DB_HOST=localhost
// DB_PORT=3306
// DB_ENABLE_LOGGING=false
