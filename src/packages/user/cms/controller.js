import * as services from "./service";
import { interalServerError } from "../../../middlewares/handle_errors";

export const getAllUsers = async (req, res) => {
  try {
    const response = await services.getAllUsers(req);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return interalServerError(res);
  }
};
export const blockUser = async (req, res) => {
  try {
    const response = await services.blockUser(req.params.id);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return interalServerError(res);
  }
};

export const getDetail = async (req, res) => {
  try {
    const response = await services.getDetail(req.params.id);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return interalServerError(res);
  }
};
