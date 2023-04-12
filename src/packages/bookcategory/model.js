const { Model, DataTypes } = require("sequelize");
const { Book, Category, Categories, Books } = require("../../models/model");
const { dbConfig } = require("../../db/db");

const BookCategories = dbConfig.define("BookCategories", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  BookId: {
    type: DataTypes.INTEGER,
    references: {
      model: Books,
      key: "BookId",
    },
  },
  CategoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Categories,
      key: "CategoryId",
    },
  },
});

export default BookCategories;
