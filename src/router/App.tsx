import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SignUpPage } from '../pages/signUp';
import { LoginPage } from '../pages/login';
import { Notification } from '../components/notification/notification';

const App = () => {
  return (
    <>
      <Notification />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
