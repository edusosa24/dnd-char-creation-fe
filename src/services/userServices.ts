import axios from 'axios';
import { iUser } from '../utils/interfaces/iUser';

const baseUrl: string = 'https://dnd-char-creation-be.onrender.com/api/users';

const getOne = async (userId: string) => {
  const response = await axios.get(`${baseUrl}/${userId}`).catch((err) => {
    throw err;
  });
  return response.data;
};

const getOneByUsername = async (username: string, token: string) => {
  const response = await axios
    .get(`${baseUrl}/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .catch((err) => {
      throw err;
    });
  return response.data;
};

const postOne = async (userData: iUser) => {
  const response = await axios.post(`${baseUrl}`, userData).catch((err) => {
    throw err;
  });
  return response.data;
};

const deleteOne = async (userId: string) => {
  const response = await axios.delete(`${baseUrl}/${userId}`).catch((err) => {
    throw err;
  });
  return response.status;
};

export default { getOne, postOne, deleteOne, getOneByUsername };
