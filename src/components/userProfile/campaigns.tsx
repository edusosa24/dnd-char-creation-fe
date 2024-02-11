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
    <section className={`${style.def.component}`}>
      <div className={`${style.def.tableTop} ${style.md.tableTop}`}>
        <h2 className={`${style.def.title}`}>Campaigns</h2>
        <div className={`${style.def.searchBar} ${style.md.searchBar}`}>
          <p className={`font-bold text-md`}>search by name:</p>
          <input
            className={`${style.def.search}`}
            onChange={handleNameFilter}
          ></input>
        </div>
      </div>
      <table className={`${style.def.table} ${style.xxl.table}`}>
        <thead
          className={`${style.def.thead} ${style.md.thead} ${style.xxl.thead}`}
        >
          <tr className={`${style.def.theadRow} ${style.xxl.theadRow}`}>
            <th className={`${style.def.th} ${style.xxl.th} 2xl:w-[35%]`}>
              Name
            </th>
            <th
              className={`${style.def.th} ${style.xxl.th} 2xl:w-[35%] pr-1 2xl:pr-0`}
            >
              #Players
            </th>
            <th className={`${style.def.th} ${style.xxl.th} 2xl:w-[15%]`}>
              Edit
            </th>
            <th className={`${style.def.th} ${style.xxl.th} 2xl:w-[15%]`}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody className={`${style.def.tbody} ${style.xxl.tbody}`}>
          {campaigns
            .filter((campaign) => campaign.name?.includes(nameFilter))
            .map((campaign) => {
              return (
                <tr
                  className={`${style.def.tbodyRow} ${style.xxl.tbodyRow}`}
                  key={campaign.id}
                >
                  <td
                    className={`${style.def.td} ${style.xxl.td} ${style.xxxl.td} 2xl:w-[35%]`}
                  >
                    {campaign.name}
                  </td>
                  <td
                    className={`${style.def.td} ${style.xxl.td} ${style.xxxl.td} 2xl:w-[35%]`}
                  >
                    {campaign.characters.length}
                  </td>
                  <td
                    className={`${style.def.td} ${style.xxl.td} ${style.xxxl.td} 2xl:w-[15%]`}
                  >
                    <button className={`${style.def.tdBtn}`} onClick={() => {}}>
                      Link
                    </button>
                  </td>
                  <td
                    className={`${style.def.td} ${style.xxl.td} ${style.xxxl.td} 2xl:w-[15%]`}
                  >
                    <button
                      className={`${style.def.tdDel}`}
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
