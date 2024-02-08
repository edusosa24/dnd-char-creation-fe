import axios from 'axios';
// import { iUser } from '../utils/interfaces/iUser';

const baseUrl: string = 'http://localhost:3000/api/characters';

const getOne = async (userId: string) => {
  const response = await axios.get(`${baseUrl}/${userId}`).catch((err) => {
    throw err;
  });
  return response.data;
};

const getAll = async (userId: string, token: string) => {
  const response = await axios
    .get(`${baseUrl}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .catch((err) => {
      throw err;
    });
  return response.data;
};

const deleteOne = async (
  characterId: string,
  userId: string,
  token: string
) => {
  const response = await axios
    .delete(`${baseUrl}/user/${userId}/character/${characterId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .catch((err) => {
      throw err;
    });
  return response.status;
};

/*
const postOne = async (userData: iUser) => {
  const response = await axios.post(`${baseUrl}`, userData).catch((err) => {
    throw err;
  });
  return response.data;
};


*/
export default { getOne, getAll, deleteOne };
