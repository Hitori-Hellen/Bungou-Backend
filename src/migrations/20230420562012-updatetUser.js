module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize;
    return Promise.all([
      await queryInterface.addColumn("Users", "phone", {
        type: DataTypes.STRING,
        allowNull: true,
      }),
      await queryInterface.addColumn("Users", "birth", {
        type: DataTypes.STRING,
        allowNull: true,
      }),

      await queryInterface.addColumn("Users", "address", {
        type: DataTypes.STRING,
        allowNull: true,
      }),

      await queryInterface.addColumn("Users", "avatar", {
        type: DataTypes.STRING,
        allowNull: true,
      }),

      await queryInterface.addColumn("Users", "isBlock", {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      }),
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize;
    await Promise.all([await queryInterface.remove("Users", "phone")]);
    await Promise.all([await queryInterface.remove("Users", "birth")]);
    await Promise.all([await queryInterface.remove("Users", "address")]);
    await Promise.all([await queryInterface.remove("Users", "avatar")]);
    await Promise.all([await queryInterface.remove("Users", "isBlock")]);
  },
};
