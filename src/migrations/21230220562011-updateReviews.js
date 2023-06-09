module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize;
    return Promise.all([
      await queryInterface.addColumn("Users", "role", {
        type: DataTypes.ENUM("user","author"),
        defaultValue: "user",
        allowNull: false,
      }),
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize;
    return Promise.all([await queryInterface.remove("Reviews", "role")]);
  },
};
