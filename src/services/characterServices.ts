import axios from 'axios';
import * as newChar from '../assets/emptyObjects/emptyChar.json';

const baseUrl: string =
  'https://dnd-char-creation-be.onrender.com/api/characters';

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

const updateOne = async (
  characterId: string,
  character: any,
  userId: string,
  token: string
) => {
  const response = await axios
    .put(`${baseUrl}/user/${userId}/character/${characterId}`, character, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  return response.status;
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

const postOne = async (userId: string, token: string) => {
  const response = await axios
    .post(`${baseUrl}/user/${userId}`, newChar.empty, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .catch((err) => {
      throw err;
    });
  return response.data;
};

export default { getOne, getAll, postOne, updateOne, deleteOne };
