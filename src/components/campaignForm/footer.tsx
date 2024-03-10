import { useNavigate } from 'react-router-dom';
import { setCampaigns } from '../../reducers/campaignsReducer';
import { useAppDispatch } from '../../utils/hooks';
import * as style from '../../assets/styles/components//campaignForm/footer.json';

export const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const closeForm = () => {
    dispatch(setCampaigns([]));
    navigate(`../../`);
  };

  return (
    <section className={`${style.footerSection}`}>
      <button
        className={`${style.footerBackBtn}`}
        onClick={closeForm}
        type="button"
      >
        Go Back
      </button>
    </section>
  );
};
