import * as db from "../../models/model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8));
export const register = async ({ email, password, firstName, lastName }) => {
  const response = await db.User.findOrCreate({
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
    await db.User.update(
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
  const response = await db.User.findOne({
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
    await db.User.update(
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
