import { Route, Routes } from 'react-router-dom';
import DetailsCard from './components/DetailsCard/DetailsCard';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MoviesData from './components/MoviesCatalog/Movies';
import Register from './components/Register/Register';
import WeeklyProgram from './components/WeeklyProgram/WeeklyProgram';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<MoviesData />} />
          <Route path="/weekly-program" element={<MoviesData />} />
          <Route path="/details/:id" element={<DetailsCard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </>
  );
}

export default App;
