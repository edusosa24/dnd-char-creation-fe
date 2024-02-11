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
    <nav className={`${style.def.component} ${style.md.component}`}>
      <div className={`${style.def.logo} ${style.md.logo} ${style.xxl.logo}`}>
        <img
          src={'/src/assets/images/dnd-logo.png'}
          className={`${style.def.logoImg} ${style.md.logoImg}`}
        />
        <h3 className={`${style.def.logoText} ${style.md.logoText}`}>
          CHARACTER <br /> CREATOR
        </h3>
      </div>
      <div>
        <button
          className={`${style.def.logout} ${style.md.logout}`}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
