module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = require('sequelize')
    return queryInterface.createTable("BookOrder", {
      BookOrderId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    BookId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Book',
            key: 'BookId'
        }
    },
    OrderId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Order',
            key: 'OrderId'
        }
    },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("BookOrder");
  },
};
