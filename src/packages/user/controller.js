import * as services from "./service";
import {
  interalServerError,
  badRequest,
} from "../../middlewares/handle_errors";

export const getUser = async (req, res) => {
  return res.send("hhaha");
};

export const register = async (req, res) => {
  try {
    const response = await services.register(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return interalServerError(res);
  }
};
export const login = async (req, res) => {
  try {
    const response = await services.login(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return interalServerError(res);
  }
};
