import { useNavigate } from 'react-router-dom';
import { clearStorage } from '../../utils/functions';
import * as style from '../../assets/styles/components/header/header.json';

export const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    clearStorage();
    navigate('/');
  };

  return (
    <nav className={`${style.component}`}>
      <div className={`${style.logo}`}>
        <div className={`${style.logoImg}`} />
        <h3 className={`${style.logoText}`}>
          CHARACTER <br /> CREATOR
        </h3>
      </div>
      <div>
        <button className={`${style.logout}`} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};
