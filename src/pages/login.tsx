import { Login } from '../components/homeForms/login';
import { HomeLogo } from '../components/homeForms/homeLogo';
import * as style from '../assets/styles/pages/home.json';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../utils/hooks';
import { useEffect } from 'react';

export const LoginPage = () => {
  const navigate = useNavigate();
  const session = useAppSelector((state) => {
    return state.session;
  });

  useEffect(() => {
    if (session) {
      navigate(`/profile/${session.username}`);
    }
  });

  return (
    <div
      className={`${style.def.container} ${style.md.mdContainer} ${style.xxl.xxlContainer} bg-home-login`}
    >
      <HomeLogo />
      <Login />
    </div>
  );
};
