import { dbConfig } from "../../db/db";

const { Sequelize ,DataTypes } = require("sequelize");

const Payments = dbConfig.define("Payments", {
  PaymentId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
})

export default Payments;
