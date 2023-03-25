import * as db from "../../../models/model";

export const getAllUsers = async (req) => {
  let {
    query: { page, limit },
  } = req;

  page = parseInt(page) || 1; // default to page 1
  limit = parseInt(limit) || 10; // default to 10 items per page

  const { count, rows } = await db.User.findAndCountAll({
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
