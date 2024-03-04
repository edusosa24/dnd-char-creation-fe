import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { deleteCampaign, loadCampaigns } from '../../reducers/campaignsReducer';
import { iCampaign } from '../../utils/interfaces/iCampaign';
import { getStorage } from '../../utils/functions';
import * as style from '../../assets/styles/components/profileTables/profileTables.json';

export const Campaigns = () => {
  const dispatch = useAppDispatch();
  const campaigns: iCampaign[] = useAppSelector((state) => {
    return state.campaigns;
  });
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    try {
      const session = getStorage();
      dispatch(loadCampaigns(session));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  const handleNameFilter = (event: any) => {
    event.preventDefault();
    setNameFilter(event.target.value);
  };

  const handleDelete = async (campaign: any) => {
    try {
      if (
        confirm(`Are you sure you want to delete campaign: ${campaign.name}`)
      ) {
        const session = getStorage();
        dispatch(deleteCampaign(campaign.id, session));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={`${style.component}`}>
      <div className={`${style.tableTop}`}>
        <h2 className={`${style.title}`}>Campaigns</h2>
        <div className={`${style.searchBar}`}>
          <p className={`font-bold text-md`}>search by name:</p>
          <input
            className={`${style.search}`}
            onChange={handleNameFilter}
          ></input>
        </div>
      </div>
      <table className={`${style.table}`}>
        <thead className={`${style.thead}`}>
          <tr className={`${style.theadRow}`}>
            <th className={`${style.th} 2xl:w-[35%]`}>Name</th>
            <th className={`${style.th} 2xl:w-[35%] pr-1 2xl:pr-0`}>
              #Players
            </th>
            <th className={`${style.th} 2xl:w-[15%]`}>Edit</th>
            <th className={`${style.th} 2xl:w-[15%]`}>Delete</th>
          </tr>
        </thead>
        <tbody className={`${style.tbody}`}>
          {campaigns
            .filter((campaign) => campaign.name?.includes(nameFilter))
            .map((campaign) => {
              return (
                <tr className={`${style.tbodyRow}`} key={campaign.id}>
                  <td className={`${style.td} 2xl:w-[35%]`}>{campaign.name}</td>
                  <td className={`${style.td} 2xl:w-[35%]`}>
                    {campaign.characters.length}
                  </td>
                  <td className={`${style.td} 2xl:w-[15%]`}>
                    <button className={`${style.tdBtn}`} onClick={() => {}}>
                      Link
                    </button>
                  </td>
                  <td className={`${style.td} 2xl:w-[15%]`}>
                    <button
                      className={`${style.tdDel}`}
                      onClick={() => {
                        handleDelete(campaign);
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
