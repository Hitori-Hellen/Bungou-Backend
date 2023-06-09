const { Sequelize } = require("sequelize");

export const dbConfig = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.DB_USERNAME}`,
  `${process.env.DB_PASSWORD}`,
  {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    define: {
      timestamps: false,
    },
  }
);
// DB_USERNAME = root;
// DB_PASSWORD = Khai141296;
// DB_NAME = DOAN;
// DB_HOST = localhost;
// DB_PORT = 3306;
// DB_ENABLE_LOGGING = false;
