import { dbConfig } from "../../db/db";
import * as db from "../../models/model";
import Reviews from "../review/model";
import Books from "./model";
const { Op } = require("sequelize");
const azure = require('azure-storage');
const {v4: uuidv4} = require('uuid');

const blobService = azure.createBlobService(process.env.AZURE_ACCOUNT_NAME, process.env.AZURE_ACCOUNT_KEY);

export const getAllBook = async (query) => {
  let page = query.page;
  let limit = query.limit;
  let yearRange = query.year?.split(",") || [];
  if (yearRange.length == 1) {
    yearRange.push(yearRange[0]);
  }
  let priceRange = query.price?.split(",") || [];
  if (priceRange.length == 1) {
    priceRange.push(priceRange[0]);
  }
  let ratingRange = query.rating?.split(",") || [];
  if (ratingRange.length == 1) {
    ratingRange.push(ratingRange[0]);
  }
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
      query.year
        ? {
            year: {
              [Op.between]: [parseInt(yearRange[0]), parseInt(yearRange[1])],
            },
          }
        : null,
      query.price
        ? {
            price: {
              [Op.between]: [
                parseFloat(priceRange[0]),
                parseFloat(priceRange[1]),
              ],
            },
          }
        : null,
      query.price
        ? {
            rating: {
              [Op.between]: [
                parseFloat(ratingRange[0]),
                parseFloat(ratingRange[1]),
              ],
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
  if (!response) {
    return {
      err: "Book not found",
    };
  }
  return {
    mes: "success",
    data: response,
  };
};

export const getBookByIsbn = async (isbn) => {
  const response = await Books.findOne({
    where: {
      isbn: isbn,
    }
  });
  if (!response) {
    return {
      err: "Book not found",
    };
  }
  return {
    mes: "success",
    data: response,
  };
};

export const checkExitBook = async (BookId) => {
  const book = await Books.findByPk(BookId);
  if (!book) {
    return true;
  }
  return false;
};

export const updateBook = async (BookId, title) => {
  await Books.update({
    [Op.and]: [
      title
      ? {
        title: title
      }
      : null,
    ],
    where: {
      BookId: BookId,
    },
  })
}

export const uploadFile = async (req, res) => {
  const containerName = 'blob';
  const imageFile = req.file;

  const stream = require('fs').createReadStream(imageFile.path);
  const streamLength = imageFile.size;
  const filename = uuidv4();
  const options = {
    contentSettings: {
      contentType: imageFile.mimetype // Use the mimetype from the uploaded file
    }
  };
  blobService.createBlockBlobFromStream(containerName, filename, stream, streamLength, options, (error, result) => {
    if (error) {
      res.status(500).json({ error: 'Failed to upload image to Azure Blob Storage' });
    } else {
      res.status(200).json({ path: 'https://blobimagebungou.blob.core.windows.net/blob/' + filename });
    }
  });
  return res;
}

export const uploadBook = async ({title, year, price, author, publisher, length, isbn, citycountry, categories}) => {
  const response = await Books.findOrCreate({
    where: { title },
    defaults: {
      title: title,
      image: "null",
      year: year,
      price: price,
      author: author,
      rating: 0,
      publisher: publisher,
      length: length,
      isbn: isbn,
      citycountry: citycountry,
      categories: categories,  
    },
  });
  return response;
}

export const deleteBook = async(BookId) => {
  await Books.destroy({
    where: {
      BookId
    }
  })
}
