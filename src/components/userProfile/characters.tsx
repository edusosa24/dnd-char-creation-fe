//import * as style from '../../assets/styles/components/homeForms/homeLogo.json';

import { useEffect } from 'react';
import characterServices from '../../services/characterServices';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { setCharacters } from '../../reducers/charactersReducer';

export const Characters = () => {
  const dispatch = useAppDispatch();
  const characters: any[] = useAppSelector((state) => {
    return state.characters;
  });
  const session = useAppSelector((state) => {
    return state.session;
  });

  useEffect(() => {
    try {
      // start placeholder
      if (characters.length !== 0) return;
      characterServices.getAll(session.userId, session.token).then((data) => {
        console.log(data);
        dispatch(setCharacters(data));
      });
    } catch (err) {
      console.log(err);
      // navigate to own profile or login page
    } finally {
      // Stop placeholder
    }
  });

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
  };

  return (
    <section
      className={`flex flex-col items-center justify-around mt-10 space-y-10 w-full h-auto`}
    >
      <h2 className={`font-black text-xl`}>Characters</h2>
      <table
        className={`flex flex-col items-center justify-between w-[70%]  space-y-1`}
      >
        <thead className={`flex flex-col justify-center items-center w-full`}>
          <tr className={`flex justify-center w-full bg-slate-600`}>
            <th className="w-[12%] text-center">ID</th>
            <th className="w-[12%] text-center">Name</th>
            <th className="w-[12%] text-center">Race</th>
            <th className="w-[12%] text-center">Class</th>
            <th className="w-[12%] text-center">Level</th>
            <th className="w-[12%] text-center">Edit</th>
            <th className="w-[12%] text-center">Download</th>
            <th className="w-[12%] text-center" />
          </tr>
        </thead>
        <tbody
          className={`flex flex-col justify-center items-center w-full space-y-1`}
        >
          {characters.map((character) => {
            return (
              <tr
                className={`flex justify-center w-full bg-slate-200`}
                key={character.id}
              >
                <td className="w-[12%] text-center text-sm">
                  <button
                    className={`text-center font-semibold text-blue-500 hover:text-sky-500 active:text-sky-700`}
                    onClick={() => handleCopy(character.id)}
                  >
                    Copy
                  </button>
                </td>
                <td className="w-[12%] text-center text-">
                  {character.general.name}
                </td>
                <td className="w-[12%] text-center text-sm">
                  {character.general.race}
                </td>
                <td className="w-[12%] text-center text-sm">
                  {character.general.class}
                </td>
                <td className="w-[12%] text-center text-sm">
                  {character.general.level}
                </td>
                <td className="w-[12%] text-center text-sm">
                  {' '}
                  <button
                    className={`text-center font-semibold text-blue-500 hover:text-sky-500 active:text-sky-700`}
                    onClick={() => {}}
                  >
                    Link
                  </button>
                </td>
                <td className="w-[12%] text-center text-sm">
                  {' '}
                  <button
                    className={`text-center font-semibold text-blue-500 hover:text-sky-500 active:text-sky-700`}
                    onClick={() => {}}
                  >
                    PDF
                  </button>
                </td>
                <td className="w-[12%] text-center text-sm">
                  {' '}
                  <button
                    className={`text-center font-semibold text-blue-500 hover:text-sky-500 active:text-sky-700`}
                    onClick={() => {}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
