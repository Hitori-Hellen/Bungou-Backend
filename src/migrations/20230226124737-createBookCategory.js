module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = require("sequelize");
    return queryInterface.createTable("BookCategories", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      BookId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Books",
          key: "BookId",
        },
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "CategoryId",
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("BookCategories");
  },
};
