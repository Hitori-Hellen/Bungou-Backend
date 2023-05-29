import { dbConfig } from "../../db/db";
import Payments from "./model";

export const getAllPayments = async (query) => {
  const response = await Payments.findAll();
  return response;
}
