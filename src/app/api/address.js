import { get, post } from './request-manager'

export const getAddress = async () => {
  return await get(`https://api.muhammadyogi.website/api/shipping-address`)
}

export const getLocation = async (location, code) => {
  return await get(`https://regions-indoneisa.herokuapp.com/api/${location}?kode_induk=${code}`);
}

export const createAddress = async data => {
  return await post(`https://api.muhammadyogi.website/api/shipping-address`, data)
}