import { Dispatch, createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: { notification: '', type: '' },
  reducers: {
    updateNotification(_state, action) {
      return (_state = { ...action.payload });
    }
  }
});

export const { updateNotification } = notificationSlice.actions;

export const setNotification = (
  notification: string,
  type: string,
  time: number
) => {
  return (dispatch: Dispatch) => {
    dispatch(updateNotification({ notification, type }));
    const timeout = time * 1000;
    setTimeout(() => {
      dispatch(updateNotification({ notification: '', type: '' }));
    }, timeout);
  };
};

export const resetNotification = () => {
  return (dispatch: Dispatch) => {
    dispatch(updateNotification({ notification: '', type: '' }));
  };
};

export default notificationSlice.reducer;
