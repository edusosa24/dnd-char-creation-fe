import { useEffect } from 'react';
import * as style from '../assets/styles/pages/profile.json';
import { Header } from '../components/header/Header';
import { Campaigns } from '../components/userProfile/campaigns';
import { Characters } from '../components/userProfile/characters';
import { useNavigate, useParams } from 'react-router-dom';
import { getStorage } from '../utils/functions';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const data = useParams();

  useEffect(() => {
    const session = getStorage();
    if (session === null) {
      navigate(`../../`);
    }
    if (session.username !== data.username) {
      navigate(`/profile/${session.username}`);
    }
  }, [navigate, data]);

  return (
    <div className={`${style.container}`}>
      <Header />
      <Characters />
      <Campaigns />
    </div>
  );
};
