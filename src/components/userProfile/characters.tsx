//import * as style from '../../assets/styles/components/homeForms/homeLogo.json';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { loadCharacters } from '../../reducers/charactersReducer';
import { getStorage } from '../../utils/functions';

export const Characters = () => {
  const dispatch = useAppDispatch();
  const characters: any[] = useAppSelector((state) => {
    return state.characters;
  });

  useEffect(() => {
    try {
      const session = getStorage();
      dispatch(loadCharacters(session));
    } catch (err) {
      console.log(err);
    }
  });

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
  };

  return (
    <section
      className={`flex flex-col items-center justify-around mt-10 space-y-1 w-full h-auto`}
    >
      <h2
        className={`font-black w-[70%] text-center border-2 border-black text-2xl text-violet-900 bg-slate-400 bg-opacity-60`}
      >
        Characters
      </h2>
      <table
        className={`flex flex-col items-center justify-start w-[70%]  space-y-1 bg-slate-400  h-80 border-black border-solid border-2 bg-opacity-60`}
      >
        <thead className={`flex flex-col justify-center items-center w-full`}>
          <tr
            className={`flex justify-center w-full pt-1 bg-slate-400 bg-opacity-60`}
          >
            <th className="w-[12%] text-center text-purple-900">ID</th>
            <th className="w-[12%] text-center text-purple-900">Name</th>
            <th className="w-[12%] text-center text-purple-900">Race</th>
            <th className="w-[12%] text-center text-purple-900">Class</th>
            <th className="w-[12%] text-center text-purple-900">Level</th>
            <th className="w-[12%] text-center text-purple-900">Edit</th>
            <th className="w-[12%] text-center text-purple-900">Download</th>
            <th className="w-[12%] text-center text-purple-900">Delete</th>
          </tr>
        </thead>
        <tbody
          className={`flex flex-col justify-start items-center w-full space-y-1 overflow-y-auto pl-1 h-full table-scroll bg-slate-300 bg-opacity-60`}
        >
          {characters.map((character) => {
            return (
              <tr
                className={`flex justify-center w-full bg-slate-200 bg-opacity-60`}
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
                    className={`text-center font-semibold text-blue-500 hover:text-sky-500`}
                    onClick={() => {}}
                  >
                    Link
                  </button>
                </td>
                <td className="w-[12%] text-center text-sm">
                  {' '}
                  <button
                    className={`text-center font-semibold text-blue-500 hover:text-sky-500`}
                    onClick={() => {}}
                  >
                    PDF
                  </button>
                </td>
                <td className="w-[12%] text-center text-sm">
                  {' '}
                  <button
                    className={`text-center text-red-700 font-black hover:text-red-500`}
                    onClick={() => {}}
                  >
                    X
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
