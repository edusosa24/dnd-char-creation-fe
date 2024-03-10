import { useForm, SubmitHandler } from 'react-hook-form';
import { campaignSchema } from '../../utils/validators/campaignValidator';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import {
  loadOneCampaign,
  updateOneCampaign
} from '../../reducers/campaignsReducer';
import { setNotification } from '../../reducers/notificationReducer';
import { getStorage } from '../../utils/functions';

import campaignServices from '../../services/campaignServices';
import * as style from '../../assets/styles/components//campaignForm/campaignForm.json';

campaignSchema.required();

export const CampaignForm = (campId: any) => {
  const dispatch = useAppDispatch();

  const campaign: any = useAppSelector((state) => {
    return state.campaigns;
  });

  const methods = useForm({
    values: { ...campaign }
  });

  useEffect(() => {
    try {
      dispatch(loadOneCampaign(campId.campId));
    } catch (err) {
      console.log(err);
    }
  }, [campId, dispatch]);

  const updateCampName: SubmitHandler<typeof campaignSchema> = async (
    data: any
  ) => {
    try {
      const session = getStorage();
      const { id, master, ...campaign } = Object.assign({}, data);
      const chars = campaign.characters.map((character: any) => {
        return character.id;
      });
      const camp = {
        name: campaign.name,
        characters: chars
      };
      const response: any = await campaignServices.updateOne(
        id,
        camp,
        session.userId,
        session.token
      );

      dispatch(updateOneCampaign(response));
      dispatch(
        setNotification(`${campaign.name} successfully updated.`, 'success', 2)
      );

      return;
    } catch (err: any) {
      dispatch(setNotification(`Couldn't update campaign name.`, 'error', 2));
      console.log(err);
    }
  };

  const updateCampChars: SubmitHandler<typeof campaignSchema> = async (
    data: any
  ) => {
    try {
      const session = getStorage();
      const { id, master, characterId, ...campaign } = Object.assign({}, data);
      const chars = campaign.characters.map((character: any) => {
        return character.id;
      });
      chars.push(characterId);
      const camp = {
        name: campaign.name,
        characters: chars
      };

      const response: any = await campaignServices.updateOne(
        id,
        camp,
        session.userId,
        session.token
      );

      dispatch(updateOneCampaign(response));
      dispatch(
        setNotification(
          `Character successfully added to '${campaign.name}' campaign`,
          'success',
          2
        )
      );

      methods.reset({ characterId: '' });
      return;
    } catch (err: any) {
      dispatch(
        setNotification(
          `Couldn't add character to campaing. Please check that the id is correct and the character is not already in.`,
          'error',
          4
        )
      );
      console.log(err);
    }
  };

  return (
    <div className={`${style.component}`}>
      <form
        className={`${style.nameForm}`}
        onSubmit={methods.handleSubmit(updateCampName)}
      >
        <fieldset className={`${style.nameFieldSet}`}>
          <h2 className={`${style.nameTitle}`}>Name</h2>
          <input
            {...methods.register('name')}
            className={`${style.nameInput}`}
            type="text"
            maxLength={24}
          />
          <button className={`${style.nameUpdateBtn}`}>UPDATE</button>
        </fieldset>
      </form>
      <form
        className={`${style.charForm}`}
        onSubmit={methods.handleSubmit(updateCampChars)}
      >
        <fieldset className={`${style.charFieldSet}`}>
          <h2 className={`${style.charTitle}`}>Characters</h2>
          <input
            {...methods.register('characterId')}
            className={`${style.charInput}`}
            type="text"
            placeholder="character id"
            maxLength={24}
          />
          <button className={`${style.charAddBtn}`}>ADD</button>
        </fieldset>
      </form>
    </div>
  );
};
