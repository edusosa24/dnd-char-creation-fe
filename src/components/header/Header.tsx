import { useNavigate } from 'react-router-dom';
import { clearStorage } from '../../utils/functions';

export const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    clearStorage();
    navigate('/');
  };

  return (
    <nav className="flex h-20 justify-between items-center bg-red-900 w-full px-16">
      <div
        className={`flex w-max h-full justify-center items-center space-x-4`}
      >
        <img
          src={'/src/assets/images/dnd-logo.png'}
          className={`z-20 w-36 h-full mt-2 select-none`}
        />
        <h3
          className={`text-white text-center font-semibold text-md select-none`}
        >
          CHARACTER <br /> CREATOR
        </h3>
      </div>
      <div>
        <button
          className={`text-white text-md font-semibold hover:text-slate-400`}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
