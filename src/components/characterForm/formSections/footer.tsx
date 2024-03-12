import { useNavigate } from 'react-router-dom';
import * as style from '../../../assets/styles/components/characterForm/characterForm.json';

export const FormFooter = () => {
  const navigate = useNavigate();

  const closeForm = () => {
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
