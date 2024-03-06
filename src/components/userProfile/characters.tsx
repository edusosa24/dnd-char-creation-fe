import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import {
  deleteCharacter,
  loadCharacters
} from '../../reducers/charactersReducer';
import { getStorage } from '../../utils/functions';
import * as style from '../../assets/styles/components/profileTables/profileTables.json';
import { useNavigate } from 'react-router-dom';
import charServices from '../../services/characterServices';

export const Characters = () => {
  const dispatch = useAppDispatch();
  const characters: any[] = useAppSelector((state) => {
    return state.characters;
  });
  const [nameFilter, setNameFilter] = useState('');
  const navigate = useNavigate();

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

  const handleEdit = (id: string) => {
    navigate(`./character/${id}`);
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

  const handleNew = async () => {
    try {
      const session = getStorage();
      const response = await charServices.postOne(
        session.userId,
        session.token
      );
      navigate(`./character/${response.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={`${style.component}`}>
      <div className={`${style.tableTop}`}>
        <h2 className={`${style.title}`}>Characters</h2>
        <div className={`${style.searchBar}`}>
          <p className={`font-bold text-md`}>search by name:</p>
          <input className={`${style.search}`} onChange={handleNameFilter} />
        </div>
      </div>
      <table className={`${style.table}`}>
        <thead className={`${style.thead}`}>
          <tr className={`${style.theadRow}`}>
            <th className={`${style.th} 2xl:w-[8%]`}>ID</th>
            <th className={`${style.th} 2xl:w-[20%]`}>Name</th>
            <th className={`${style.th} 2xl:w-[20%]`}>Class</th>
            <th className={`${style.th} 2xl:w-[20%]`}>Race</th>
            <th className={`${style.th} 2xl:w-[8%]`}>Level</th>
            <th className={`${style.th} 2xl:w-[8%]`}>Edit</th>
            <th className={`${style.th} 2xl:w-[8%] pr-1 2xl:pr-0`}>Delete</th>
          </tr>
        </thead>
        <tbody className={`${style.tbody}`}>
          {characters
            .filter((character) => character.general.name?.includes(nameFilter))
            .map((character) => {
              return (
                <tr className={`${style.tbodyRow}`} key={character.id}>
                  <td className={`${style.td} 2xl:w-[8%]`}>
                    <button
                      className={`${style.tdBtn}`}
                      onClick={() => handleCopy(character.id)}
                    >
                      Copy
                    </button>
                  </td>
                  <td className={`${style.td} 2xl:w-[20%]`}>
                    {character.general.name}
                  </td>
                  <td className={`${style.td} 2xl:w-[20%]`}>
                    {character.general.class}
                  </td>
                  <td className={`${style.td} 2xl:w-[20%]`}>
                    {character.general.race}
                  </td>
                  <td className={`${style.td} 2xl:w-[8%]`}>
                    {character.general.level}
                  </td>
                  <td className={`${style.td} 2xl:w-[8%]`}>
                    {' '}
                    <button
                      className={`${style.tdBtn}`}
                      onClick={() => handleEdit(character.id)}
                    >
                      Link
                    </button>
                  </td>
                  <td className={`${style.td} 2xl:w-[8%]`}>
                    {' '}
                    <button
                      className={`${style.tdDel}`}
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
      <button onClick={handleNew} className={`${style.addEntryBtn}`}>
        +
      </button>
    </section>
  );
};
