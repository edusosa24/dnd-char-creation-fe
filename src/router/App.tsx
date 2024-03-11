import { Route, Routes, useNavigate } from 'react-router-dom';
import { SignUpPage } from '../pages/signUp';
import { LoginPage } from '../pages/login';
import { ProfilePage } from '../pages/profile';
import { CharacterEditPage } from '../pages/characterEdit';
import { Notification } from '../components/notification/notification';
import { setLogin } from '../reducers/sessionReducer';
import { useEffect } from 'react';
import { getStorage } from '../utils/functions';
import { useAppDispatch } from '../utils/hooks';
import { CampaignEditPage } from '../pages/campaignEdit';
import { CharacterDetailsPage } from '../pages/characterDetails';

const App = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userData = getStorage();
    if (userData) {
      dispatch(setLogin(userData));
    }
  }, [dispatch, navigate]);

  return (
    <>
      <Notification />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route
          path="/profile/:username/character/:id"
          element={<CharacterEditPage />}
        />
        <Route
          path="/profile/:username/campaign/:id"
          element={<CampaignEditPage />}
        />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
