import { Route, Routes } from 'react-router-dom';
import { SignUpPage } from '../pages/signUp';
import { LoginPage } from '../pages/login';
import { ProfilePage } from '../pages/profile';
import { Notification } from '../components/notification/notification';
import { setLogin } from '../reducers/sessionReducer';
import { useEffect } from 'react';
import { getStorage } from '../utils/functions';
import { useAppDispatch } from '../utils/hooks';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userData = getStorage();
    if (userData) {
      dispatch(setLogin(userData));
    }
  });

  return (
    <>
      <Notification />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Routes>
    </>
  );
};
// <Route path="*" element={<NotFound/>}/>

export default App;
