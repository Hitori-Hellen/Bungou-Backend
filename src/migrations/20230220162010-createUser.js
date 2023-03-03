module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = require("sequelize");
    return queryInterface.createTable("User", {
      UserId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      Username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Useremail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("User");
  },
};
