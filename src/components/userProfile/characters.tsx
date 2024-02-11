import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import {
  deleteCharacter,
  loadCharacters
} from '../../reducers/charactersReducer';
import { getStorage } from '../../utils/functions';
import * as style from '../../assets/styles/components/profileTables/profileTables.json';

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
    <section className={`${style.def.component}`}>
      <div className={`${style.def.tableTop} ${style.md.tableTop}`}>
        <h2 className={`${style.def.title}`}>Characters</h2>
        <div className={`${style.def.searchBar} ${style.md.searchBar}`}>
          <p className={`font-bold text-md`}>search by name:</p>
          <input
            className={`${style.def.search}`}
            onChange={handleNameFilter}
          ></input>
        </div>
      </div>
      <table className={`${style.def.table} ${style.xxl.table}`}>
        <thead
          className={`${style.def.thead} ${style.md.thead} ${style.xxl.thead}`}
        >
          <tr className={`${style.def.theadRow} ${style.xxl.theadRow}`}>
            <th className={`${style.def.th} ${style.xxl.th} 2xl:w-[8%]`}>ID</th>
            <th className={`${style.def.th} ${style.xxl.th} 2xl:w-[20%]`}>
              Name
            </th>
            <th className={`${style.def.th} ${style.xxl.th} 2xl:w-[20%]`}>
              Class
            </th>
            <th className={`${style.def.th} ${style.xxl.th} 2xl:w-[20%]`}>
              Race
            </th>
            <th className={`${style.def.th} ${style.xxl.th} 2xl:w-[8%]`}>
              Level
            </th>
            <th className={`${style.def.th} ${style.xxl.th} 2xl:w-[8%]`}>
              Edit
            </th>
            <th
              className={`${style.def.th} ${style.xxl.th} 2xl:w-[8%] pr-1 2xl:pr-0`}
            >
              Download
            </th>
            <th className={`${style.def.th} ${style.xxl.th} 2xl:w-[8%]`}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody className={`${style.def.tbody} ${style.xxl.tbody}`}>
          {characters
            .filter((character) => character.general.name?.includes(nameFilter))
            .map((character) => {
              return (
                <tr
                  className={`${style.def.tbodyRow} ${style.xxl.tbodyRow}`}
                  key={character.id}
                >
                  <td
                    className={`${style.def.td} ${style.xxl.td} ${style.xxxl.td} 2xl:w-[8%]`}
                  >
                    <button
                      className={`${style.def.tdBtn}`}
                      onClick={() => handleCopy(character.id)}
                    >
                      Copy
                    </button>
                  </td>
                  <td
                    className={`${style.def.td} ${style.xxl.td} ${style.xxxl.td} 2xl:w-[20%]`}
                  >
                    {character.general.name}
                  </td>
                  <td
                    className={`${style.def.td} ${style.xxl.td} ${style.xxxl.td} 2xl:w-[20%]`}
                  >
                    {character.general.class}
                  </td>
                  <td
                    className={`${style.def.td} ${style.xxl.td} ${style.xxxl.td} 2xl:w-[20%]`}
                  >
                    {character.general.race}
                  </td>
                  <td
                    className={`${style.def.td} ${style.xxl.td} ${style.xxxl.td} 2xl:w-[8%]`}
                  >
                    {character.general.level}
                  </td>
                  <td
                    className={`${style.def.td} ${style.xxl.td} ${style.xxxl.td} 2xl:w-[8%]`}
                  >
                    {' '}
                    <button className={`${style.def.tdBtn}`} onClick={() => {}}>
                      Link
                    </button>
                  </td>
                  <td
                    className={`${style.def.td} ${style.xxl.td} ${style.xxxl.td} 2xl:w-[8%]`}
                  >
                    {' '}
                    <button className={`${style.def.tdBtn}`} onClick={() => {}}>
                      PDF
                    </button>
                  </td>
                  <td
                    className={`${style.def.td} ${style.xxl.td} ${style.xxxl.td} 2xl:w-[8%]`}
                  >
                    {' '}
                    <button
                      className={`${style.def.tdDel}`}
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
