module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = require("sequelize");
    return queryInterface.createTable("UserRole", {
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "UserId",
        },
      },
      RoleId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Role",
          key: "RoleId",
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("UserRole");
  },
};
