const { Model, sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  sequelize.define("Role", {
    RoleId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    RoleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  models.Role.belongsToMany(models.Role, {
    through: models.UserRole,
    foreignKey: "RoleId",
    otherKey: "id",
  });
};
