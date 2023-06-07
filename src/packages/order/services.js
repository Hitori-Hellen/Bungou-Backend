import Order from "../order/model.js"

export const getAllOrder = () => {
  const response = await Order.findAll();
  return response;
}

export const getOrderCurrentState = () => {
  const response = await Order.findOne({
    where: { state: 0 }
  });
  return response;
}

export const addItemToOrder = (UserId, BookId) => {

}


