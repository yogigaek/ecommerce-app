import { get, post } from "./request-manager"

export const createOrder = async payload => {
  return await post(`https://api.muhammadyogi.website/api/order`, payload)
}

export async function getInvoiceByOrderId(order_id) {
  return await get(`https://api.muhammadyogi.website/api/invoice/${order_id}`);
}

export async function getOrders(){
  return await get(`https://api.muhammadyogi.website/api/order`);
}