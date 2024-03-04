import { Header } from '../components/header/Header';
import * as style from '../assets/styles/pages/character.json';
import { CharacterForm } from '../components/characterForm/characterForm';
import { useParams } from 'react-router-dom';

export const CharacterEditPage = () => {
  const data = useParams();

  return (
    <div className={`${style.container}`}>
      <Header />
      <CharacterForm charId={data.id} />
    </div>
  );
};
