module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = require("sequelize");
    return queryInterface.createTable("OrderItem", {
       id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  OrderId: {
    type: DataTypes.INTEGER,
    references: {
            model: "Order",
            key: "OrderId"
    }

  },
  BookId: {
    type: DataTypes.INTEGER,
    references: {
          model: "Books",
          key: "BookId",
        }
  }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("OrderItem");
  },
};
