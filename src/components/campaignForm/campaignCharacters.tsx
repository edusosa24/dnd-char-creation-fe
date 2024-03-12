import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { getStorage } from '../../utils/functions';
import * as style from '../../assets/styles/components/profileTables/profileTables.json';
import campaignServices from '../../services/campaignServices';
import { updateOneCampaign } from '../../reducers/campaignsReducer';
import { useEffect } from 'react';

export const CampaignCharacters = () => {
  const dispatch = useAppDispatch();
  const campaign: any = useAppSelector((state) => {
    return state.campaigns;
  })[0];

  const handleDetails = async (charId: any) => {
    window.open(`${window.location.origin}/character/${charId}`);
  };

  useEffect(() => {}, [campaign]);

  const handleRemove = async (character: any) => {
    try {
      if (
        confirm(
          `Are you sure you want to remove: ${character.general.name} from the campagin?`
        )
      ) {
        const session = getStorage();
        const chars = campaign.characters
          .map((char: any) => {
            return char.id;
          })
          .filter((char: any) => char !== character.id);

        const camp = {
          name: campaign.name,
          characters: chars
        };

        const response: any = await campaignServices.updateOne(
          campaign.id,
          camp,
          session.userId,
          session.token
        );

        dispatch(updateOneCampaign(response));
      }
      return;
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <section className={`${style.component}`}>
      <table className={`${style.table}`}>
        <thead className={`${style.thead}`}>
          <tr className={`${style.theadRow}`}>
            <th className={`${style.th} 2xl:w-[23%]`}>Name</th>
            <th className={`${style.th} 2xl:w-[23%]`}>Class</th>
            <th className={`${style.th} 2xl:w-[20%]`}>Race</th>
            <th className={`${style.th} 2xl:w-[8%]`}>Level</th>
            <th className={`${style.th} 2xl:w-[8%]`}>Details</th>
            <th className={`${style.th} 2xl:w-[8%] pr-1 2xl:pr-0`}>Remove</th>
          </tr>
        </thead>
        <tbody className={`${style.tbody}`}>
          {campaign?.characters?.map((character: any) => {
            return (
              <tr className={`${style.tbodyRow}`} key={character.id}>
                <td className={`${style.td} 2xl:w-[23%]`}>
                  {character.general.name}
                </td>
                <td className={`${style.td} 2xl:w-[23%]`}>
                  {character.general.class}
                </td>
                <td className={`${style.td} 2xl:w-[20%]`}>
                  {character.general.race}
                </td>
                <td className={`${style.td} 2xl:w-[8%]`}>
                  {character.general.level}
                </td>
                <td className={`${style.td} 2xl:w-[8%]`}>
                  <button
                    className={`${style.tdBtn}`}
                    onClick={() => handleDetails(character.id)}
                  >
                    Link
                  </button>
                </td>
                <td className={`${style.td} 2xl:w-[8%]`}>
                  <button
                    className={`${style.tdDel}`}
                    onClick={() => {
                      handleRemove(character);
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
