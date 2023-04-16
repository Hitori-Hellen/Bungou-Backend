import { dbConfig } from "../../db/db";
import * as db from "../../models/model";
import Books from "./model";
const { Op } = require("sequelize");

export const getAllBook = async (query) => {
  let page = query.page;
  let limit = query.limit;

  page = parseInt(page) || 1; // default to page 1
  limit = parseInt(limit) || 10; // default to 10 items per page

  const queryFilter = {
    [Op.and]: [
      query.search
        ? {
            title: {
              [Op.substring]: `%${query.search}%`,
            },
          }
        : null,
      query.categories
        ? {
            categories: {
              [Op.substring]: dbConfig.literal(`${query.categories}`),
            },
          }
        : null,
    ],
  };
  const { count, rows } = await Books.findAndCountAll({
    where: queryFilter,
    limit,
    offset: (page - 1) * limit,
  });

  return {
    page: page,
    limit: limit,
    count: count,
    rows: rows,
  };
};

export const getBookById = async (id) => {
  const response = await Books.findOne({
    where: {
      BookId: id,
    },
  });
  return response;
};

export const getBookByTitle = async (title) => {
  let name = title.split("_").join(" ");
  const response = await Books.findOne({
    where: {
      title: name,
    },
  });
  return response;
};

export const searchBookByTitle = async (title) => {
  const response = await Books.findAll({
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
  // return response;
};
