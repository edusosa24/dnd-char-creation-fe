import { Header } from '../components/header/Header';
import * as style from '../assets/styles/pages/campaign.json';
import { useNavigate, useParams } from 'react-router-dom';
import { CampaignForm } from '../components/campaignForm/campaignForm';
import { Footer } from '../components/campaignForm/footer';
import { CampaignCharacters } from '../components/campaignForm/campaignCharacters';
import { useEffect } from 'react';
import { getStorage } from '../utils/functions';

export const CampaignEditPage = () => {
  const navigate = useNavigate();
  const data = useParams();

  useEffect(() => {
    const session = getStorage();
    if (session === null) {
      navigate(`/`);
      return;
    }
    if (session?.username !== data?.username) {
      navigate(`/profile/${session.username}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
