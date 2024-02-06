//import * as style from '../assets/styles/pages/profile.json';
import { Campaigns } from '../components/userProfile/campaigns';
import { Characters } from '../components/userProfile/characters';

export const ProfilePage = () => {
  return (
    <div
      className={`container flex flex-col mx-auto w-full space-y-80 bg-slate-100`}
    >
      <Characters />
      <Campaigns />
    </div>
  );
};
