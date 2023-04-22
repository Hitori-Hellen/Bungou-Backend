import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./model";
import crypto from "crypto";
import { Op } from "sequelize";
import { sendResetTokenEmail } from "../../lib/nodemailer";
import { reviewBook } from "../review/services";

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8));
export const register = async ({ email, password, firstName, lastName }) => {
  const response = await User.findOrCreate({
    where: { email },
    defaults: {
      firstName,
      lastName,
      email,
      password: hashPassword(password),
    },
  });

  const accessToken = response[1]
    ? jwt.sign(
        {
          id: response[0].id,
          email: response[0].email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "5d" }
      )
    : null;

  if (accessToken) {
    await User.update(
      { accessToken: accessToken },
      {
        where: {
          email,
        },
      }
    );
  }
  return {
    err: response[1] ? 0 : 1,
    mes: response[1] ? "Register is successfully" : "Email is used",
    access_token: accessToken ? `Bearer ${accessToken}` : accessToken,
  };
};

export const login = async ({ email, password }) => {
  const response = await User.findOne({
    where: { email },
    raw: true,
  });
  const isChecked = response && bcrypt.compareSync(password, response.password);
  const accessToken = isChecked
    ? jwt.sign(
        {
          id: response.id,
          email: response.email,
          role_code: response.role_code,
        },
        process.env.JWT_SECRET,
        { expiresIn: "5d" }
      )
    : null;
  if (accessToken) {
    await User.update(
      { accessToken: accessToken },
      {
        where: {
          email,
        },
      }
    );
  }
  return {
    err: accessToken ? 0 : 1,
    mes: accessToken
      ? "Login is successfully"
      : response
      ? "Password is wrong"
      : "Email has been registered",
    access_token: accessToken ? `Bearer ${accessToken}` : accessToken,
  };
};

export const changePwdUser = async (userId, body) => {
  const id = userId;
  const newPassword = hashPassword(body.newPassword);
  const user = await User.findByPk(id);
  if (!user) {
    return {
      mes: "user không tồn tại",
    };
  }
  user.password = newPassword;
  await user.save();
  return {
    mes: "success",
  };
};

export const updateOne = async (id, body) => {
  const user = User.findByPk(id);
  if (!user) {
    return {
      mes: "user không tồn tại",
    };
  }

  await User.update(
    { ...body },
    {
      where: { id },
    }
  );
  return true;
};

export const requestResetPwd = async (body) => {
  // Tìm kiếm User theo email
  const user = await User.findOne({ where: { email: body.email } });
  if (!user) {
    return {
      error: "email không tồn tại",
    };
  }

  // Tạo resetToken ngẫu nhiên
  const randomNumbers = Array.from(
    { length: 4 },
    () => Math.floor(Math.random() * 10) + 1
  );
  // Cập nhật resetToken và resetTokenExpiry cho User
  const data = {
    resetToken: randomNumbers.join(""),
    resetTokenExpiry: new Date(Date.now() + 60000),
  };
  await user.update({ ...data });
  sendResetTokenEmail(user.email, randomNumbers.join(""));
  return {
    mes: "success",
    resetToken: randomNumbers.join(""),
  };
};

export const resetPwd = async (body) => {
  const { email, resetToken, newPassword } = body;
  const user = await User.findOne({
    where: {
      email,
      resetToken,
      resetTokenExpiry: {
        [Op.gt]: new Date(), // Kiểm tra xem resetToken có còn hiệu lực hay không
      },
    },
  });

  if (!user) {
    return { error: "resetToken không tồn tại" };
  }

  // Mã hóa mật khẩu mới
  const hashedPassword = hashPassword(newPassword);

  // Cập nhật mật khẩu mới cho User
  const data = {
    password: hashedPassword,
    resetToken: null,
    resetTokenExpiry: null,
  };
  await user.update({ ...data });

  // Trả về thành công
  return true;
};

export const review = async (body, bookId, user) => {
  const data = {
    bookId: bookId,
    userId: user.id,
    ...body,
  };
  await reviewBook(data);
  return true;
};
