import { Login } from '../components/homeForms/login';
import { HomeLogo } from '../components/homeForms/homeLogo';
import * as style from '../assets/styles/pages/home.json';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getStorage } from '../utils/functions';

export const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const session = getStorage();
    if (session && session.username !== '') {
      navigate(`/profile/${session.username}`);
    }
  }, [navigate]);

  return (
    <div className={`${style.container} bg-home-login`}>
      <HomeLogo />
      <Login />
    </div>
  );
};
