import { verify, TokenExpiredError } from "jsonwebtoken";
import repoAuthor from "../packages/author/model";

/* eslint-disable no-unused-vars */

// eslint-disable-next-line consistent-return
export const authentication = async (req, res, next) => {
  const fullPrefixToken = req.headers.authorization;

  if (fullPrefixToken) {
    const token = fullPrefixToken.split(" ")[1];
    // eslint-disable-next-line consistent-return
    verify(`${token}`, process.env.JWT_SECRET, async (error, decoded) => {
      try {
        if (error) {
          const isChecked = error instanceof TokenExpiredError;

          if (!isChecked) {
            return res.status(401).json({
              mes: "token lỗi",
            });
          }

          if (isChecked) {
            return res.status(401).json({
              mes: "token hết hạn",
            });
          }
        }

        if (typeof decoded === "string") {
          // eslint-disable-next-line no-param-reassign
          decoded = JSON.parse(decodeURIComponent(decoded));
        }

        if (typeof decoded === "undefined") {
          return res.status(401).json({
            mes: "token lỗi",
          });
        }

        // Cache User
        const author = await repoAuthor.findByPk(decoded.id, {
          attributes: {
            exclude: ["password", "accessToken"],
          },
        });
        if (!author) {
          return res.status(400).json({
            mes: "author không tồn tại ",
          });
        }
        req.author = author.toJSON();

        next();
      } catch (errors) {
        return res.status(401).json({
          mes: "token lỗi",
        });
      }
    });
  } else {
    return res.status(401).json({
      mes: "token lỗi",
    });
  }
};

