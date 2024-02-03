import { Dispatch, createSlice } from '@reduxjs/toolkit';
import loginService from '../services/loginService';
import { iUser } from '../utils/interfaces/iUser';

const sessionSlice = createSlice({
  name: 'session',
  initialState: { userId: '', username: '', token: '' },
  reducers: {
    setCredentials(state: any, action: any) {
      state = { ...action.payload };
      console.log(state);
    }
  }
});

export const { setCredentials } = sessionSlice.actions;

export const loginUser = (user: iUser) => {
  return async (dispatch: Dispatch) => {
    console.log(user);

    const data = await loginService.login(user);
    console.log(data);

    dispatch(setCredentials(data));
    // store on cache
  };
};

export default sessionSlice.reducer;
