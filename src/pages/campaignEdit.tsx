import { Header } from '../components/header/Header';
import * as style from '../assets/styles/pages/campaign.json';
import { useParams } from 'react-router-dom';
import { CampaignForm } from '../components/campaignForm/campaignForm';
import { Footer } from '../components/campaignForm/footer';
import { CampaignCharacters } from '../components/campaignForm/campaignCharacters';

export const CampaignEditPage = () => {
  const data = useParams();

  return (
    <div className={`${style.container}`}>
      <Header />
      <div className={`${style.section}`}>
        <CampaignForm campId={data.id} />
        <CampaignCharacters />
        <Footer />
      </div>
    </div>
  );
};
