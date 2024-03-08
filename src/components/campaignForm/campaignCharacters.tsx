import { useForm, SubmitHandler } from 'react-hook-form';
//import { campaignSchema } from '../../utils/validators/campaignValidator';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
//import { loadOneCampaign } from '../../reducers/campaignsReducer';
import { getStorage } from '../../utils/functions';
import campaignServices from '../../services/campaignServices';
import { setNotification } from '../../reducers/notificationReducer';
// import { yupResolver } from '@hookform/resolvers/yup';

//campaignSchema.required();

export const CampaignForm = (campId: any) => {
  const dispatch = useAppDispatch();

  const campaign: any = useAppSelector((state) => {
    return state.campaigns;
  });

  const methods = useForm({
    //resolver: yupResolver(campaignSchema),
    values: { ...campaign }
  });

  useEffect(() => {
    try {
      //dispatch(loadOneCampaign(campId.campId));
    } catch (err) {
      console.log(err);
    }
  }, [campId, dispatch]);

  /*
  const updateCamp: SubmitHandler<typeof campaignSchema> = async (
    data: any
  ) => {
    try {
      const { userId, token } = getStorage();
      const { id, user, ...campaign } = Object.assign({}, data);
      await campaignServices.updateOne(
        campId.campId,
        campaign,
        userId,
        token
      );

      dispatch(
        setNotification(
          `${campaign.general.name} successfully updated.`,
          'success',
          2
        )
      );
      return;
    } catch (err: any) {
      console.log(err);
    }
  };
*/
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
