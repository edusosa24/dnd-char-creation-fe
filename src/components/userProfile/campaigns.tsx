//import * as style from '../../assets/styles/components/homeForms/homeLogo.json';

import { useEffect } from 'react';
import campaignServices from '../../services/campaignServices';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { setCampaigns } from '../../reducers/campaignsReducer';

export const Campaigns = () => {
  const dispatch = useAppDispatch();
  const campaigns: any[] = useAppSelector((state) => {
    return state.campaigns;
  });
  const session = useAppSelector((state) => {
    return state.session;
  });

  useEffect(() => {
    try {
      // start placeholder
      if (campaigns.length !== 0) return;
      campaignServices.getAll(session.userId, session.token).then((data) => {
        console.log(data);
        dispatch(setCampaigns(data));
      });
    } catch (err) {
      console.log(err);
      // navigate to own profile or login page
    } finally {
      // Stop placeholder
    }
  });

  return (
    <section
      className={`flex flex-col items-center justify-center w-full mt-10 space-y-10 h-auto`}
    >
      <h2 className={`font-black text-xl`}>Campaigns</h2>
      <table
        className={`flex flex-col items-center justify-between w-[70%]  space-y-1`}
      >
        <thead className={`flex flex-col justify-center items-center w-full`}>
          <tr className={`flex justify-center w-full bg-slate-600`}>
            <th className="w-[70%] text-center">Name</th>
            <th className="w-[15%] text-center">Edit</th>
            <th className="w-[15%] text-center" />
          </tr>
        </thead>
        <tbody
          className={`flex flex-col justify-center items-center w-full space-y-1`}
        >
          {campaigns.map((campaign) => {
            return (
              <tr
                className={`flex justify-center w-full bg-slate-200`}
                key={campaign.id}
              >
                <td className="w-[70%] text-center text-sm">{campaign.name}</td>
                <td className="w-[15%] text-center text-sm">
                  <button
                    className={`text-center font-semibold text-blue-500 hover:text-sky-500 active:text-sky-700`}
                    onClick={() => {}}
                  >
                    Edit
                  </button>
                </td>
                <td className="w-[15%] text-center text-sm">
                  <button
                    className={`text-center font-semibold text-blue-500 hover:text-sky-500 active:text-sky-700`}
                    onClick={() => {}}
                  >
                    Delete
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
