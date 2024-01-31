import axios from 'axios';
import { iUser } from '../utils/interfaces/iUser';

const baseUrl: string = 'http://localhost:3000/api/users';

const getOne = async (userId: string) => {
  const response = await axios.get(`${baseUrl}/${userId}`);
  return response.data;
};

const postOne = async (userData: iUser) => {
  const response = await axios.post(`${baseUrl}`, userData);
  return response.data;
};

const deleteOne = async (userId: string) => {
  const response = await axios.delete(`${baseUrl}/${userId}`);
  return response.status;
};

export default { getOne, postOne, deleteOne };
