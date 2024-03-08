import { useForm, SubmitHandler } from 'react-hook-form';
import { campaignSchema } from '../../utils/validators/campaignValidator';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import {
  loadOneCampaign,
  setCampaigns,
  updateOneCampaign
} from '../../reducers/campaignsReducer';
import { setNotification } from '../../reducers/notificationReducer';
import { getStorage } from '../../utils/functions';
import { useNavigate } from 'react-router-dom';
import campaignServices from '../../services/campaignServices';

campaignSchema.required();

export const CampaignForm = (campId: any) => {
  const dispatch = useAppDispatch();

  const campaign: any = useAppSelector((state) => {
    return state.campaigns;
  });

  console.log(campaign);

  const navigate = useNavigate();

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

      console.log(response);

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

  const closeForm = () => {
    dispatch(setCampaigns([]));
    navigate(`../../`);
  };

  return (
    <div className={`flex flex-col items-center p-2 w-full gap-y-16`}>
      <form
        className={`flex flex-col items-center gap-y-16 p-3 w-full`}
        onSubmit={methods.handleSubmit(updateCampName)}
      >
        <fieldset
          className={`flex flex-col w-full gap-y-2 items-center justify-start`}
        >
          <h2 className={`text-xl font-semibold`}>Name</h2>
          <input
            {...methods.register('name')}
            className={`text-xs border-2 border-black text-center w-60 p-1 md:w-80 md:text-sm 2xl:text-base 2xl:w-128`}
            type="text"
            maxLength={24}
          />
          <button
            className={`font-semibold border-2 border-black rounded-lg p-1 text-center w-20 bg-blue-500 hover:bg-blue-600 hover:text-white active:bg-blue-800`}
          >
            UPDATE
          </button>
        </fieldset>
      </form>
      <form
        className={`flex flex-col items-center gap-y-16 p-3 w-full`}
        onSubmit={methods.handleSubmit(updateCampChars)}
      >
        <fieldset
          className={`flex flex-wrap w-full gap-2 items-center justify-center`}
        >
          <h2
            className={`font-black text-normal w-full text-center text-slate-800`}
          >
            Characters
          </h2>
          <input
            {...methods.register('characterId')}
            className={`text-xs border-2 border-black text-center w-60 p-1 md:w-80 md:text-sm 2xl:text-base`}
            type="text"
            placeholder="character id"
            maxLength={24}
          />
          <button
            className={`font-semibold border-2 border-black rounded-lg p-1 text-center w-12 bg-blue-500 hover:bg-blue-600 hover:text-white active:bg-blue-800`}
          >
            ADD
          </button>
        </fieldset>
      </form>

      <section
        className={`flex justify-center gap-x-5 bottom-8 fixed z-50 h-10 w-[99%] xl:justify-end xl:pr-[10%]`}
      >
        <button
          className={`font-semibold border-2 border-black rounded-lg p-1 text-center w-32 bg-red-600 bg-opacity-50 hover:bg-opacity-100 hover:text-white active:bg-red-800`}
          onClick={closeForm}
          type="button"
        >
          Go Back
        </button>
      </section>
    </div>
  );
};
