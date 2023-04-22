module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = require("sequelize");
    return queryInterface.createTable("Reviews", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      bookId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Books",
          key: "BookId",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      review: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      rating: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Reviews");
  },
};
