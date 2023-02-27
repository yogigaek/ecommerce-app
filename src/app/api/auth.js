import {
  post
} from './request-manager'

export const registerUser = async (data) => {
  return await post(`https://server.muhammadyogi.website/auth/register`, data);
}

export const loginUser = async (data) => {
  return await post(`https://server.muhammadyogi.website/auth/login`, data);
}

export const logoutUser = async () => {
  return await post(`https://server.muhammadyogi.website/auth/logout`, null)
    .then(res => {
      localStorage.removeItem('auth');
      return res
    });
}