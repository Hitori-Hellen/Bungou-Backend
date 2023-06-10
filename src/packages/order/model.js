import { dbConfig } from "../../db/db";

import Payments from "../payment_details/model";
import OrderItem from "../order_items/model";
import User from "../user/model";
import { DataTypes, Sequelize } from "sequelize";

const Order = dbConfig.define("Order", {
  OrderId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  Order.hasOne(Payments, {
    foreignKey: "PaymentId",
    as: "Payments",
  });
  Order.hasMany(OrderItem, {
    foreignKey: "id",
    as: "OrderItem",
  });
  Order.hasOne(User, {
    foreignKey: "id",
    as: "User",
  });
});

export default Order;
