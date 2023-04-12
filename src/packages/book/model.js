import { dbConfig } from "../../db/db";
import BookCategories from "../bookcategory/model";
import Categories from "../category/model";

const { Model, DataTypes } = require("sequelize");

const Books = dbConfig.define("Books", {
  BookId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  publisher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  length: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  citycountry: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

setTimeout(() => {
  Books.belongsToMany(Categories, {
    through: BookCategories,
    foreignKey: "BookId",
    as: "categories",
  });
});

// models.Book.hasMany(models.Review, {
//   foreignKey: "ReviewId",
// });
// models.Book.belongsToMany(models.Book, {
//   through: models.BookOrder,
//   foreignKey: "BookId",
//   otherKey: "OrderId",
// });
export default Books;
