import { dbConfig } from "../../db/db";

const { DataTypes } = require("sequelize");

const User = dbConfig.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accessToken: {
    type: DataTypes.STRING(300),
    allowNull: true,
  },
});
// models.User.belongsToMany(models.User, {
//   through: models.UserRole,
//   foreignKey: "UserId",
//   otherKey: "RoleId",
// });
// models.User.hasMany(models.Review, {
//   foreignKey: "ReviewId",
// });
// models.User.hasMany(models.Order, {
//   foreignKey: "OrderId",
// });

export default User;
