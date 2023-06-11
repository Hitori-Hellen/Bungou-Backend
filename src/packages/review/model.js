import Books from "../book/model";
import User from "../user/model";

const { DataTypes, Sequelize } = require("sequelize");
const { dbConfig } = require("../../db/db");

const Reviews = dbConfig.define("Reviews", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  bookId: {
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  review: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  rating: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
});

setTimeout(() => {
  Reviews.belongsTo(User);
  //   Reviews.belongsTo(Books);
});

export default Reviews;
