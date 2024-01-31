// import { Routes, Route, Link, useMatch, useNavigate } from 'react-router-dom';

//import { Login } from '../components/homeForms/login';
import { Home } from '../pages/home';

const App = () => {
  return (
    <>
      <Home />
    </>
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
