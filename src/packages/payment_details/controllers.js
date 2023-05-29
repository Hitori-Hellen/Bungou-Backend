import * as services from './services'

export const getAllPayments = async (req, res) => {
  try {
    const response = await services.getAllPayments();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
}
