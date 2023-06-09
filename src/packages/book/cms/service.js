import * as db from "../../../models/model";
import { Op } from "sequelize";
import Book from "../model";

export const updateBook = async (req) => {
  const bookId = req.params.id;

  try {
    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Cập nhật thông tin cuốn sách
    await Book.update(
      { ...body },
      {
        where: {
          id: bookId,
        },
      }
    );

    return {
      mes: "success",
      data: response,
    };
  } catch (error) {
    console.error("Error updating book:", error);
    return {
      mes: "fail",
    };
  }
};
