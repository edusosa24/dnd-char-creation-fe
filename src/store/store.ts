import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from '../reducers/sessionReducer';
import notificationReducer from '../reducers/notificationReducer';
import charactersReducer from '../reducers/charactersReducer';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    notification: notificationReducer,
    characters: charactersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default { store };
