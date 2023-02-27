import { get } from "./request-manager"

export const getProduct = async (params) => {
  return await get(`https://server.muhammadyogi.website/api/product`, { params })
}

export const getCategories = async () => {
  return await get(`https://server.muhammadyogi.website/api/category`);
}

export const getTagsByCategory = async (category) => {
  return await get(`https://server.muhammadyogi.website/api/tag/${category}`);
}