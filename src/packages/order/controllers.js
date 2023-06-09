import * as services from "./services.js"

export const createPaymentUrl = async (req, res) => {
  try {
    const response = await services.createPaymentUrl(req, res);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    // return interalServerError(res);
  }
}