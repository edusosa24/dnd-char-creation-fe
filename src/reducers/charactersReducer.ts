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

export const setcharacters = (characters: any[]) => {
  return (dispatch: Dispatch) => {
    dispatch(updateCharacters(characters));
  };
};

/*     {
      general: {
        name: '',
        class: '',
        race: '',
        level: 0
      },
      id: ''
    } */

export default characterSlice.reducer;
