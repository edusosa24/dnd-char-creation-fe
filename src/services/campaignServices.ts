import axios from 'axios';
import * as newCamp from '../assets/emptyObjects/emptyCampaign.json';

const baseUrl: string =
  'https://dnd-char-creation-be.onrender.com/api/campaigns';

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
  campaignId: string,
  campaign: any,
  userId: string,
  token: string
) => {
  const response = await axios
    .put(`${baseUrl}/user/${userId}/campaign/${campaignId}`, campaign, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  return response.data;
};

const deleteOne = async (campaignId: string, userId: string, token: string) => {
  const response = await axios
    .delete(`${baseUrl}/user/${userId}/campaign/${campaignId}`, {
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
    .post(`${baseUrl}/user/${userId}`, newCamp.empty, {
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
