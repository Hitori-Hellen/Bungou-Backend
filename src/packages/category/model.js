import Books from "../book/model";
import BookCategories from "../bookcategory/model";

const { Model, sequelize, DataTypes } = require("sequelize");
const { dbConfig } = require("../../db/db");

const Categories = dbConfig.define("Categories", {
  CategoryId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

setTimeout(() => {
  Categories.belongsToMany(Books, {
    through: BookCategories,
    foreignKey: "CategoryId",
    as: "books",
  });
});

export default Categories;
