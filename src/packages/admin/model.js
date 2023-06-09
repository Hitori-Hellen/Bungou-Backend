import { dbConfig } from "../../db/db";
import Reviews from "../review/model";

const { DataTypes } = require("sequelize");

const Admins = dbConfig.define("Admins", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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
  createdAt: {
    type: DataTypes.DATE(3),
  },
  updatedAt: {
    type: DataTypes.DATE(3),
  },
});
setTimeout(() => {});

export default Admins;
