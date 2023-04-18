module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize;
    return Promise.all([
      await queryInterface.addColumn("Users", "resetToken", {
        type: DataTypes.STRING(300),
      }),
      await queryInterface.addColumn("Users", "resetTokenExpiry", {
        type: DataTypes.DATE,
        allowNull: true,
      }),
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize;
    return Promise.all([
      await queryInterface.remove("Users", "resetToken"),
      await queryInterface.remove("Users", "resetTokenExpiry"),
    ]);
  },
};
