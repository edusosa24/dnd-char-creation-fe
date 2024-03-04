import * as style from '../assets/styles/pages/profile.json';
import { Header } from '../components/header/Header';
import { Campaigns } from '../components/userProfile/campaigns';
import { Characters } from '../components/userProfile/characters';

export const ProfilePage = () => {
  return (
    <div className={`${style.container}`}>
      <Header />
      <Characters />
      <Campaigns />
    </div>
  );
};
