import { put } from './request-manager'

export const saveCart = async (token, cart) => {
  return await put(`https://server.muhammadyogi.website/api/cart`, {items: cart})
}