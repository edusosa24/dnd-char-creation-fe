//import * as style from '../../assets/styles/components/homeForms/homeLogo.json';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import {
  deleteCharacter,
  loadCharacters
} from '../../reducers/charactersReducer';
import { getStorage } from '../../utils/functions';

export const Characters = () => {
  const dispatch = useAppDispatch();
  const characters: any[] = useAppSelector((state) => {
    return state.characters;
  });
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    try {
      const session = getStorage();
      dispatch(loadCharacters(session));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  const handleNameFilter = (event: any) => {
    event.preventDefault();
    setNameFilter(event.target.value);
  };

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
  };

  const handleDelete = async (character: any) => {
    try {
      if (
        confirm(
          `Are you sure you want to delete character: ${character.general.name}`
        )
      ) {
        const session = getStorage();
        dispatch(deleteCharacter(character.id, session));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section
      className={`flex flex-col items-center justify-around mt-10 space-y-1 w-full h-auto`}
    >
      <div
        className={`flex justify-between items-center px-5 w-[75%] border-2 border-black bg-slate-400 bg-opacity-60 rounded-sm`}
      >
        <h2 className={`font-black  text-center  text-2xl text-red-900 `}>
          Characters
        </h2>
        <div className={`flex items-center space-x-2`}>
          <p className={`font-bold text-md`}>search by name:</p>
          <input
            className={`rounded-sm opacity-60 border-black border-2 px-1 self-center outline-none focus:border-gray-500`}
            onChange={handleNameFilter}
          ></input>
        </div>
      </div>

      <table
        className={`flex 2xl:flex-col 2xl:items-center justify-start w-[75%]  space-y-1 bg-slate-400  h-80 border-black border-solid border-2 bg-opacity-60`}
      >
        <thead
          className={`flex flex-col justify-center items-center w-[20%] 2xl:w-full`}
        >
          <tr
            className={`flex flex-col 2xl:flex-row 2xl:h-full h-[98%] justify-around w-full items-start 2xl:justify-center 2xl:pl-1 pt-1 bg-slate-400 bg-opacity-60`}
          >
            <th className="2xl:w-[8%] text-center text-red-800 pl-2 2xl:pl-0">
              ID
            </th>
            <th className="2xl:w-[20%] text-center text-red-800 pl-2 2xl:pl-0">
              Name
            </th>
            <th className="2xl:w-[20%] text-center text-red-800 pl-2 2xl:pl-0">
              Class
            </th>
            <th className="2xl:w-[20%] text-center text-red-800 pl-2 2xl:pl-0">
              Race
            </th>
            <th className="2xl:w-[8%] text-center text-red-800 pl-2 2xl:pl-0">
              Level
            </th>
            <th className="2xl:w-[8%] text-center text-red-800 pl-2 2xl:pl-0">
              Edit
            </th>
            <th className="2xl:w-[8%] text-center text-red-800 pl-2 2xl:pl-0">
              Download
            </th>
            <th className="2xl:w-[8%] text-center text-red-800 pl-1">Delete</th>
          </tr>
        </thead>
        <tbody
          className={`flex 2xl:flex-col justify-start items-center space-x-2 2xl:space-x-0 2xl:space-y-1 overflow-x-auto overflow-y-hidden 2xl:overflow-x-hidden 2xl:overflow-y-auto pl-1 h-[98%] 2xl:h-full table-scroll w-[80%] 2xl:w-full bg-slate-300 bg-opacity-60`}
        >
          {characters
            .filter((character) => character.general.name?.includes(nameFilter))
            .map((character) => {
              return (
                <tr
                  className={`flex h-[98%] pl-1 pr-1 2xl:pr-0 2xl:pl-0 justify-around items-center 2xl:h-[90%] flex-col 2xl:justify-center 2xl:w-full bg-slate-200 bg-opacity-60 2xl:flex-row`}
                  key={character.id}
                >
                  <td className="2xl:w-[8%] w-full text-center 2xl:text-xs 3xl:text-sm">
                    <button
                      className={`text-center font-semibold text-blue-500 hover:text-sky-500 active:text-sky-700`}
                      onClick={() => handleCopy(character.id)}
                    >
                      Copy
                    </button>
                  </td>
                  <td className="2xl:w-[20%] w-full text-center 2xl:text-xs 3xl:text-sm">
                    {character.general.name}
                  </td>
                  <td className="2xl:w-[20%] w-full text-center 2xl:text-xs 3xl:text-sm">
                    {character.general.class}
                  </td>
                  <td className="2xl:w-[20%] w-full text-center 2xl:text-xs 3xl:text-sm">
                    {character.general.race}
                  </td>
                  <td className="2xl:w-[8%] w-full text-center 2xl:text-xs 3xl:text-sm">
                    {character.general.level}
                  </td>
                  <td className="2xl:w-[8%] w-full text-center 2xl:text-xs 3xl:text-sm">
                    {' '}
                    <button
                      className={`text-center font-semibold text-blue-500 hover:text-sky-500`}
                      onClick={() => {}}
                    >
                      Link
                    </button>
                  </td>
                  <td className="2xl:w-[8%] w-full text-center 2xl:text-xs 3xl:text-sm">
                    {' '}
                    <button
                      className={`text-center font-semibold text-blue-500 hover:text-sky-500`}
                      onClick={() => {}}
                    >
                      PDF
                    </button>
                  </td>
                  <td className="2xl:w-[8%] w-full text-center 2xl:text-xs 3xl:text-sm">
                    {' '}
                    <button
                      className={`text-center text-red-700 font-black hover:text-red-500`}
                      onClick={() => {
                        handleDelete(character);
                      }}
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
