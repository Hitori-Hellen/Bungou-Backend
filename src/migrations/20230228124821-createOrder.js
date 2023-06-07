module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = require("sequelize");
    return queryInterface.createTable("Order", {
       OrderId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: "Users",
            key: "id"
        }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    state: {
        type: DataTypes.BOOLEAN,
    },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Order");
  },
};
