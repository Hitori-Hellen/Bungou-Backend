module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = require("sequelize");
    return queryInterface.createTable("Admins", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accessToken: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE(3),
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP(3)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        defaultValue: DataTypes.literal(
          "CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"
        ),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Admins");
  },
};
