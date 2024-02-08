//import * as style from '../assets/styles/pages/profile.json';
import { Header } from '../components/header/Header';
import { Campaigns } from '../components/userProfile/campaigns';
import { Characters } from '../components/userProfile/characters';

export const ProfilePage = () => {
  return (
    <div
      className={`container flex min-w-full min-h-full bg-profile bg-cover bg-center bg-no-repeat flex-col self-center mx-auto space-y-10 items-center`}
    >
      <Header />
      <Characters />
      <Campaigns />
    </div>
  );
};
