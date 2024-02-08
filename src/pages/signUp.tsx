import { SignUp } from '../components/homeForms/signUp';
import * as style from '../assets/styles/pages/home.json';
import { HomeLogo } from '../components/homeForms/homeLogo';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getStorage } from '../utils/functions';

export const SignUpPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const session = getStorage();
    if (session && session.username !== '') {
      navigate(`/profile/${session.username}`);
    }
  }, [navigate]);

  return (
    <div
      className={`${style.def.container} ${style.md.mdContainer} ${style.xxl.xxlContainer} bg-home-signup`}
    >
      <HomeLogo />
      <SignUp />
    </div>
  );
};
