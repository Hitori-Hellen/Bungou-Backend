import { checkExitBook } from "../book/services";
import User from "../user/model";
import Reviews from "./model";
import Review from "./model";

export const reviewBook = async (data) => {
  const checkBook = await checkExitBook(data.bookId);
  if (checkBook) {
    return {
      err: "Sách không tồn tại",
    };
  }
  await Review.create(data);
};

export const review = async (bookId) => {
  const checkBook = await checkExitBook(bookId);
  if (checkBook) {
    return {
      err: "Sách không tồn tại",
    };
  }

  const { count, rows } = await Reviews.findAndCountAll({
    order: [["createdAt", "ASC"]], //DESC
    where: { bookId },
    include: [
      { model: User, attributes: ["id", "firstName", "lastName", "email"] },
    ],
  });
  return {
    count,
    rows,
  };
};
