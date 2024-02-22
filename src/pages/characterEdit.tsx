import { Header } from '../components/header/Header';
import { CharacterForm } from '../components/characterForm/characterForm';

export const CharacterEditPage = () => {
  return (
    <div
      className={`container flex min-w-full h-full bg-character-form bg-cover bg-center bg-no-repeat flex-col self-center mx-auto space-y-10 items-center overflow-y-auto`}
    >
      <Header />
      <CharacterForm />
    </div>
  );
};
