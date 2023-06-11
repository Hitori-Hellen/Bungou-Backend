import { dbConfig } from "../../db/db";

import Payments from "../payment_details/model";
import OrderItem from "../order_items/model";
import User from "../user/model";
import { DataTypes, Sequelize } from "sequelize";
import Books from "../book/model";

const Order = dbConfig.define('Orders', {
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
            key: 'id'
        }
    },
    BookId: {
      type: DataTypes.INTEGER,
        references: {
            model: Books,
            key: 'BookId'
        }
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

setTimeout(() => {
  Order.hasOne(Payments, {
    foreignKey: "PaymentId",
    as: "Payments",
  });

  Order.belongsTo(User, {
    foreignKey: "id",
    as: "User",
  });
  Order.belongsTo(Books, {
    foreignKey: "BookId",
    as: "Books",
  });
})

export default Order;
