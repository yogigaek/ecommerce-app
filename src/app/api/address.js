import { get, post } from './request-manager'

export const getAddress = async () => {
  return await get(`https://server.muhammadyogi.website/api/shipping-address`)
}

export const getLocation = async (location, code) => {
  return await get(`https://regions-indonesia.herokuapp.com/api/${location}?kode_induk=${code}`);
}

export const createAddress = async data => {
  return await post(`https://server.muhammadyogi.website/api/shipping-address`, data)
}