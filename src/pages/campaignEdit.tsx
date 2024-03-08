import { Header } from '../components/header/Header';
import * as style from '../assets/styles/pages/character.json';
import { useParams } from 'react-router-dom';
import { CampaignForm } from '../components/campaignForm/campaignForm';

export const CampaignEditPage = () => {
  const data = useParams();

  return (
    <div className={`${style.container}`}>
      <Header />
      <div
        className={`flex w-[90%] flex-wrap flex-col items-center rounded-sm bg-slate-100 bg-opacity-[60%] py-3 gap-y-8 justify-self-center md:w-[80%] md:flex-row md:items-start md:justify-around`}
      >
        <CampaignForm campId={data.id} />
      </div>
    </div>
  );
};
