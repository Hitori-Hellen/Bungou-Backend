module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize;
    return Promise.all([
      await queryInterface.addColumn("Reviews", "createdAt", {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      }),
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize;
    return Promise.all([await queryInterface.remove("Reviews", "createdAt")]);
  },
};
