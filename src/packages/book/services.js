import { dbConfig } from "../../db/db";
import * as db from "../../models/model";
import Books from "./model";
const { Op } = require("sequelize");

export const getAllBook = async () => {
  const response = await db.Books.findAll({
    limit: 25,
  });
  return response;
};

export const getBookById = async (id) => {
  const response = await db.Books.findOne({
    where: {
      BookId: id,
    },
  });
  return response;
};

export const getBookByTitle = async (title) => {
  let name = title.split("_").join(" ");
  const response = await db.Books.findOne({
    where: {
      title: name,
    },
  });
  return response;
};

export const searchBookByTitle = async (title) => {
  const response = await db.Books.findAll({
    limit: 10,
    where: {
      title: {
        [Op.substring]: dbConfig.literal(title),
      },
    },
  });
  return response;
};

export const test = async () => {
  // const response = await Books.findAll({
  //   include: [{ model: Categories, as: "categories" }],
  // });
  return response;
};
