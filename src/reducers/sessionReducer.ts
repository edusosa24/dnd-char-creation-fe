import { Dispatch, createSlice } from '@reduxjs/toolkit';
import loginService from '../services/loginService';
import { iUser } from '../utils/interfaces/iUser';

const sessionSlice = createSlice({
  name: 'session',
  initialState: { userId: '', username: '', token: '', expiresAt: 0 },
  reducers: {
    setCredentials(_state: any, action: any) {
      return (_state = { ...action.payload });
    }
  }
});

export const { setCredentials } = sessionSlice.actions;

export const loginUser = (user: iUser) => {
  return async (dispatch: Dispatch) => {
    const data = await loginService.login(user);
    dispatch(setCredentials(data));
    return data;
  };
};

export const setLogin = (sessionData: any) => {
  return (dispatch: Dispatch) => {
    dispatch(setCredentials(sessionData));
  };
};

export default sessionSlice.reducer;
