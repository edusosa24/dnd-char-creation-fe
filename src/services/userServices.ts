import axios from 'axios';
import { iUser } from '../utils/interfaces/iUser';

const baseUrl: string = 'http://localhost:3000/api/users';

const getOne = async (userId: string) => {
  const response = await axios.get(`${baseUrl}/${userId}`).catch((err) => {
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

export default { getOne, postOne, deleteOne };
