import { Header } from '../components/header/Header';
import * as style from '../assets/styles/pages/character.json';
import { CharacterForm } from '../components/characterForm/characterForm';
import { useNavigate, useParams } from 'react-router-dom';
import { getStorage } from '../utils/functions';
import { useEffect } from 'react';

export const CharacterEditPage = () => {
  const navigate = useNavigate();
  const data = useParams();

  useEffect(() => {
    const session = getStorage();
    if (session === null || session.username !== data.username) {
      navigate(`/character/${data.id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className={`${style.container}`}>
      <Header />
      <CharacterForm charId={data.id} />
    </div>
  );
};
