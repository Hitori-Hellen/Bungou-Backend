module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = require('sequelize')
    return queryInterface.createTable("Order", {
      OrderId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    UserId: {
        type: DataTypes.INTEGER,
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'UserId'
        }
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
