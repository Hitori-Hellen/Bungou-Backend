import { dbConfig } from "../../db/db";

import Books from "../book/model";
import Order from "../order/model";

const { Sequelize, DataTypes, BelongsTo } = require("sequelize");

const OrderItem = dbConfig.define("OrderItem", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  OrderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  BookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

export default OrderItem;
