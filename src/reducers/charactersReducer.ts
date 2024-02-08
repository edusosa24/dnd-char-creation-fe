import { Dispatch, createSlice } from '@reduxjs/toolkit';
import characterServices from '../services/characterServices';

const characterSlice = createSlice({
  name: 'character',
  initialState: [],
  reducers: {
    updateCharacters(state, action) {
      return (state = action.payload);
    }
  }
});

export const { updateCharacters } = characterSlice.actions;

export const loadCharacters = (session: any) => {
  return async (dispatch: Dispatch) => {
    const data = await characterServices.getAll(session.userId, session.token);
    dispatch(updateCharacters(data));
  };
};

export const setCharacters = (characters: any[]) => {
  return (dispatch: Dispatch) => {
    dispatch(updateCharacters(characters));
  };
};

export const deleteCharacter = (characterId: string, session: any) => {
  return async (dispatch: Dispatch) => {
    await characterServices.deleteOne(
      characterId,
      session.userId,
      session.token
    );
    const data = await characterServices.getAll(session.userId, session.token);
    dispatch(updateCharacters(data));
  };
};

export default characterSlice.reducer;
