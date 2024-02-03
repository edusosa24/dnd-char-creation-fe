import { Login } from '../components/homeForms/login';
import { HomeLogo } from '../components/homeForms/homeLogo';
import * as style from '../assets/styles/pages/home.json';

export const LoginPage = () => {
  return (
    <div
      className={`${style.def.conainer} ${style.md.mdContainer} ${style.xxl.xxlContainer} bg-home-login`}
    >
      <HomeLogo />
      <Login />
    </div>
  );
};
