import { Dispatch, createSlice } from '@reduxjs/toolkit';
import userServices from '../services/userServices';
import { iUser } from '../utils/interfaces/iUser';

const userSlice = createSlice({
  name: 'user',
  initialState: { username: '', password: '' },
  reducers: {
    newUser(state: any, action: any) {
      state = { ...action.payload };
    }
  }
});

export const { newUser } = userSlice.actions;

export const createUser = (user: iUser) => {
  return async (dispatch: Dispatch) => {
    const data = await userServices.postOne(user);
    dispatch(newUser(data));
  };
};

export default userSlice.reducer;
