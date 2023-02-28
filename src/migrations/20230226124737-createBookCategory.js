module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = require('sequelize')
    return queryInterface.createTable("BookCategory", {
      BookId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Book',
            key: 'BookId'
        }
    },
    CategoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Category',
            key: 'CategoryId'
        }
    }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("BookCategory");
  },
};
