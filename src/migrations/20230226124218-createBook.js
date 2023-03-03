module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = require("sequelize");
    return queryInterface.createTable("Book", {
      BookId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      rating: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      publisher: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      length: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      citycountry: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Book");
  },
};
