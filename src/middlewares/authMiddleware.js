import { verify, TokenExpiredError } from "jsonwebtoken";
import repoUser from "../packages/user/model";

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
        const user = await repoUser.findByPk(decoded.id, {
          attributes: {
            exclude: ["password", "accessToken"],
          },
        });
        if (!user) {
          return res.status(400).json({
            mes: "user không tồn tại ",
          });
        }
        req.user = user.toJSON();

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
