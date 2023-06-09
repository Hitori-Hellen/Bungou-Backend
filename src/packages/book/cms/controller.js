import * as services from "./service";
import { interalServerError } from "../../../middlewares/handle_errors";

export const updateBook = async (req, res) => {
  try {
    const response = await services.updateBook(req.params.id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return interalServerError(res);
  }
};
