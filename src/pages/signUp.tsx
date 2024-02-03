import { SignUp } from '../components/homeForms/signUp';
import * as style from '../assets/styles/pages/home.json';
import { HomeLogo } from '../components/homeForms/homeLogo';

export const SignUpPage = () => {
  return (
    <div
      className={`${style.def.conainer} ${style.md.mdContainer} ${style.xxl.xxlContainer} bg-home-signup`}
    >
      <HomeLogo />
      <SignUp />
    </div>
  );
};
