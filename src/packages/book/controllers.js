import * as services from "./services"

export const getAllBook = async (req, res) => {
  try {
    const response = await services.getAllBook();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    // return interalServerError(res);
  }
}

export const getBookById = async (req, res) => {
  try {
    const response = await services.getBookById(req.params.id);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    // return interalServerError(res);
  }
}

export const getBookByTitle = async (req, res) => {
  try {
    const response = await services.getBookByTitle(req.params.name);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    // return interalServerError(res);
  }
}

export const searchBookByTitle = async (req, res) => {
  try {
    const response = await services.searchBookByTitle(req.query.name);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    // return interalServerError(res);
  }
}