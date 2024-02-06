import { Dispatch, createSlice } from '@reduxjs/toolkit';

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

export const setCharacters = (characters: any[]) => {
  return (dispatch: Dispatch) => {
    dispatch(updateCharacters(characters));
  };
};

export default characterSlice.reducer;
