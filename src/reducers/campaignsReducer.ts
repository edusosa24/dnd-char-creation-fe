import { Dispatch, createSlice } from '@reduxjs/toolkit';
import { iCampaign } from '../utils/interfaces/iCampaign';
import campaignServices from '../services/campaignServices';
import characterServices from '../services/characterServices';

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

export const deleteCampaign = (campaignId: string, session: any) => {
  return async (dispatch: Dispatch) => {
    await campaignServices.deleteOne(campaignId, session.userId, session.token);
    const data = await campaignServices.getAll(session.userId, session.token);
    dispatch(updateCampaigns(data));
  };
};

export const loadOneCampaign = (campaignId: string) => {
  return async (dispatch: Dispatch) => {
    const data = await campaignServices.getOne(campaignId);
    dispatch(updateCampaigns(data));
  };
};

export const updateOneCampaign = (campaign: iCampaign) => {
  return async (dispatch: Dispatch) => {
    dispatch(updateCampaigns(campaign));
  };
};

export default campaignSlice.reducer;
