module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = require('sequelize')
    return queryInterface.createTable("Review", {
      ReviewId: {
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
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'UserId'
        }
    },
    review: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    rating: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Review");
  },
};
