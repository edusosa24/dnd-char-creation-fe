import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SignUpPage } from '../pages/signUp';
import { LoginPage } from '../pages/login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

/*
  <Header/>
  <div>
        <Link to="/">
          Anecdotes
        </Link>
        <Link to="/create">
          Create Anecdote
        </Link>
        <Link to="/about">
          About
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<Anecdote anecdote={anecdote} />} />
        <Route
          path="/create"
          element={
            <CreateNew addNew={addNew} setNotification={setNotification} />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
  <Footer/>
  */
