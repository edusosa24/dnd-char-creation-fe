import axios from 'axios';
import { iUser } from '../utils/interfaces/iUser';

const baseUrl: string = 'http://localhost:3000/api/login';

const login = async (userData: iUser) => {
  const response = await axios
    .post(baseUrl, null, {
      headers: {
        username: userData.username,
        password: userData.password
      }
    })
    .catch((err) => {
      throw err;
    });

  return response.data;
};

export default { login };
