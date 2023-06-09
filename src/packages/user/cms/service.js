import * as db from "../../../models/model";
import { Op } from "sequelize";
import User from "../model";

export const getAllUsers = async (req) => {
  let {
    query: { page, limit },
  } = req;

  page = parseInt(page) || 1; // default to page 1
  limit = parseInt(limit) || 10; // default to 10 items per page

  const queryFilter = {
    [Op.and]: [
      req.query.search
        ? {
            [Op.or]: [
              { firstName: { [Op.like]: `%${query.search}%` } },
              { phone: { [Op.like]: `%${query.search}%` } },
              { email: { [Op.like]: `%${query.search}%` } },
            ],
          }
        : null,

      req.query.block
        ? {
            isBlock: {
              [Op.eq]: true,
            },
          }
        : null,
    ],
  };

  const { count, rows } = await User.findAndCountAll({
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

export const blockUser = async (id) => {
  const user = await User.findByPk(id);
  const { isBlock } = user;

  return User.update(
    {
      isBlock: !isBlock,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

export const getDetail = async (id) => {
  return User.findOne({
    where: {
      id: id,
    },
  });
};
