import { dbConfig } from "../../db/db";

import Payments from "../payment_details/model";
import OrderItem from "../order_items/model";
import User from "../user/model";
import { DataTypes } from "sequelize";

const Order = dbConfig.define('Order', {
    OrderId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'UserId'
        }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    state: {
        type: DataTypes.BOOLEAN,
    },
})

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
    foreignKey: "UserId",
    as: "User",
  })
})

export default Order;
