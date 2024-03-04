import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../utils/hooks';
import { setCharacters } from '../../../reducers/charactersReducer';
import * as style from '../../../assets/styles/components/characterForm/characterForm.json';

export const FormFooter = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const closeForm = () => {
    dispatch(setCharacters([]));
    navigate(`../../`);
  };

  return (
    <section className={`${style.formFooter}`}>
      <button
        className={`${style.formCancelBtn}`}
        onClick={closeForm}
        type="button"
      >
        Go Back
      </button>
      <button className={`${style.formSubmitBtn}`}>Save</button>
    </section>
  );
};
