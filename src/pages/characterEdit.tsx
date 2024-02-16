import { Header } from '../components/header/Header';
import { CharacterForm } from '../components/characterForm/characterForm';

export const CharacterEditPage = () => {
  return (
    <div
      className={`container flex min-w-full h-full bg-slate-500 flex-col self-center mx-auto space-y-10 items-center overflow-y-auto`}
    >
      <Header />
      <CharacterForm />
    </div>
  );
};
