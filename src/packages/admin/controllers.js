import { interalServerError } from "../../middlewares/handle_errors";
import * as services from "./services";

export const registerAdmin = async (req, res) => {
  try {
    const response = await services.register(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return interalServerError(res);
  }
};
export const loginAdmin = async (req, res) => {
  try {
    const response = await services.login(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return interalServerError(res);
  }
};
