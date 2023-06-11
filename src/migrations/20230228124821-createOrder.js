module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = require("sequelize");
    return queryInterface.createTable("Orders", {
       OrderId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: "Users",
            key: "id"
        }
    },
    BookId: {
      type: DataTypes.INTEGER,
        references: {
            model: "Books",
            key: 'BookId'
        }
    },
    amount: {
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
    return queryInterface.dropTable("Orders");
  },
};
