import { Dispatch, createSlice } from '@reduxjs/toolkit';
import { iCampaign } from '../utils/interfaces/iCampaign';
import campaignServices from '../services/campaignServices';

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

export const loadCampaigns = (session: any) => {
  return async (dispatch: Dispatch) => {
    const data = await campaignServices.getAll(session.userId, session.token);
    dispatch(updateCampaigns(data));
  };
};

export const setCampaigns = (campaigns: iCampaign[]) => {
  return (dispatch: Dispatch) => {
    dispatch(updateCampaigns(campaigns));
  };
};

export default campaignSlice.reducer;
