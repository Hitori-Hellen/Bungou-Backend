import { dbConfig } from "../../db/db";
import User from "../user/model";

const { Sequelize, DataTypes } = require("sequelize");

const Shopping_session = dbConfig.define("Shopping__session", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_at: {
    type: "TIMESTAMP",
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
  },
  updated_at: {
    type: "TIMESTAMP",
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
  },
});

setTimeout(() => {
  Shopping_session.hasOne(User, {
    foreignKey: "userId",
    as: "user",
  })
})

export default Shopping_session;
