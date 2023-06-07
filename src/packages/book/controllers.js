import * as services from "./services";

export const getAllBook = async (req, res) => {
  try {
    const response = await services.getAllBook(req.query);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    // return interalServerError(res);
  }
};

export const getBookById = async (req, res) => {
  try {
    const response = await services.getBookById(req.params.id);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    // return interalServerError(res);
  }
};

export const getBookByIsbn = async (req, res) => {
  try {
    const response = await services.getBookByIsbn(req.params.isbn);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
}

export const review = async (req, res) => {
  try {
    const response = await services.review(req.params.id);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return interalServerError(res);
  }
};

export const upload = async (req, res) => {
  try{
    const response = await services.uploadFile(req, res);
    return res.status(200).json(response);
  }catch(error){
    console.log(error);
  }
}

export const uploadBook  = async (req, res) => {
  try {
    const response = await services.uploadBook(req.query);
    return res.status(200).json(response);
  }catch(error){
    console.log(error);
  }
}

export const updateBook  = async (req, res) => {
  try {
    const response = await services.updateBook(req.body);
    return res.status(200).json(response);
  }catch(error){
    console.log(error);
  }
}

export const deleteBook = async (req, res) => {
  try {
    const response = await services.deleteBook(req.params.id);
    return res.status(200).json(response);
  }catch(error){
    console.log(error);
  }
}
