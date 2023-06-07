import { dbConfig } from "../../db/db";
import Order from "../order/model";
import Reviews from "../review/model";

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
  resetToken: {
    type: DataTypes.STRING(300),
    allowNull: true,
  },
  resetTokenExpiry: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});
setTimeout(() => {
  User.hasMany(Reviews, { foreignKey: "userId", as: "reviewUser" });
});

export default User;
