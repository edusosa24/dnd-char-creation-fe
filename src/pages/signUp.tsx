import { SignUp } from '../components/homeForms/signUp';
import * as style from '../assets/styles/pages/home.json';
import { HomeLogo } from '../components/homeForms/homeLogo';
import { useAppSelector } from '../utils/hooks';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const session = useAppSelector((state) => {
    return state.session;
  });

  useEffect(() => {
    if (session.userId !== '') {
      navigate(`/profile/${session.username}`);
    }
  });

  return (
    <div
      className={`${style.def.container} ${style.md.mdContainer} ${style.xxl.xxlContainer} bg-home-signup`}
    >
      <HomeLogo />
      <SignUp />
    </div>
  );
};
