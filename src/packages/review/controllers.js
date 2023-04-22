import * as services from "./services";

export const review = async (req, res) => {
  try {
    const response = await services.review(req.params.id);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return interalServerError(res);
  }
};
