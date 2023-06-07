module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = require("sequelize");
    return queryInterface.createTable("Payments", {
      PaymentId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  order_id: {
    type: DataTypes.INTEGER,
    references: {
            model: "Order",
            key: "OrderId"
    }

  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: "TIMESTAMP",
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
  updated_at: {
    type: "TIMESTAMP",
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Payments");
  },
};
