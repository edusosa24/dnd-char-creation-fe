import { Header } from '../components/header/Header';
import { CharacterForm } from '../components/characterForm/characterForm';
import { useParams } from 'react-router-dom';

export const CharacterEditPage = () => {
  const data = useParams();

  return (
    <div
      className={`container flex min-w-full h-full bg-character-form bg-cover bg-center bg-no-repeat flex-col self-center mx-auto space-y-10 items-center overflow-y-auto`}
    >
      <Header />
      <CharacterForm charId={data.id} />
    </div>
  );
};
