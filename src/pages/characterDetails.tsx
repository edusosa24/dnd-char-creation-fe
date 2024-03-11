import * as style from '../assets/styles/pages/character.json';
import { useParams } from 'react-router-dom';
import { CharacterDetails } from '../components/characterDetails/character';

export const CharacterDetailsPage = () => {
  const data = useParams();

  return (
    <div className={`${style.container}`}>
      <CharacterDetails charId={data.id} />
    </div>
  );
};
