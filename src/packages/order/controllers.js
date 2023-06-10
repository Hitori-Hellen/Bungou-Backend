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

export const getVnpayIpn = async (req, res) => {
  try {
    const response = await services.getVnpayIpn(req, res);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    // return interalServerError(res);
  }
}

export const returnVnpay = async (req, res) => {
  try {
    const response = await services.returnVnpay(req, res);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    // return interalServerError(res);
  }
}