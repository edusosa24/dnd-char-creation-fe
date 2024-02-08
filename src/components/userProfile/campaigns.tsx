//import * as style from '../../assets/styles/components/homeForms/homeLogo.json';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { deleteCampaign, loadCampaigns } from '../../reducers/campaignsReducer';
import { iCampaign } from '../../utils/interfaces/iCampaign';
import { getStorage } from '../../utils/functions';

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
    <section
      className={`flex flex-col items-center justify-around space-y-1 w-full h-auto`}
    >
      <div
        className={`flex justify-between items-center px-5 w-[70%] border-2 border-black bg-slate-400 bg-opacity-60 rounded-sm`}
      >
        <h2 className={`font-black  text-center  text-2xl text-violet-900 `}>
          Campaigns
        </h2>
        <div className={`flex items-center space-x-2`}>
          <p className={`font-bold text-md`}>search by name:</p>
          <input
            className={`rounded-sm opacity-60 border-black border-2 px-1 self-center outline-none focus:border-gray-500`}
            onChange={handleNameFilter}
          ></input>
        </div>
      </div>
      <table
        className={`flex flex-col items-center justify-start w-[70%]  space-y-1 bg-slate-400  h-80 border-black border-solid border-2 bg-opacity-60`}
      >
        <thead className={`flex flex-col justify-center items-center w-full`}>
          <tr
            className={`flex justify-center w-full pt-1 bg-slate-400 bg-opacity-60`}
          >
            <th className="w-[35%] text-center text-purple-900">Name</th>
            <th className="w-[35%] text-center text-purple-900">#Players</th>
            <th className="w-[15%] text-center text-purple-900">Edit</th>
            <th className="w-[15%] text-center text-purple-900">Delete</th>
          </tr>
        </thead>
        <tbody
          className={`flex flex-col justify-start items-center w-full space-y-1 overflow-y-auto h-full table-scroll`}
        >
          {campaigns
            .filter((campaign) => campaign.name?.includes(nameFilter))
            .map((campaign) => {
              return (
                <tr
                  className={`flex justify-center w-full bg-slate-200 bg-opacity-60`}
                  key={campaign.id}
                >
                  <td className="w-[35%] text-center text-sm">
                    {campaign.name}
                  </td>
                  <td className="w-[35%] text-center text-sm">
                    {campaign.characters.length}
                  </td>
                  <td className="w-[15%] text-center text-sm">
                    <button
                      className={`text-center font-semibold text-blue-500 hover:text-sky-500 active:text-sky-700`}
                      onClick={() => {}}
                    >
                      Link
                    </button>
                  </td>
                  <td className="w-[15%] text-center text-sm">
                    <button
                      className={`text-center text-red-700 font-black hover:text-red-500`}
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
