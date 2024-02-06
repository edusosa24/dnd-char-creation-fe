import { Dispatch, createSlice } from '@reduxjs/toolkit';

const campaignSlice = createSlice({
  name: 'campaign',
  initialState: [],
  reducers: {
    updateCampaigns(state, action) {
      return (state = action.payload);
    }
  }
});

export const { updateCampaigns } = campaignSlice.actions;

export const setCampaigns = (campaigns: any[]) => {
  return (dispatch: Dispatch) => {
    dispatch(updateCampaigns(campaigns));
  };
};

export default campaignSlice.reducer;
