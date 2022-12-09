import { Route, Routes } from 'react-router-dom';
import AddMovie from './components/AddMovie/AddMovie';
import ContactUs from './components/ContactUs/ContactUs';
import DetailsCard from './components/DetailsCard/DetailsCard';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Login from './components/Forms/Login';
import MoviesData from './components/MoviesCatalog/Movies';
import Register from './components/Forms/Register';
import EditMovie from './components/Edit/EditMovie';

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
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/edit/:id" element={<EditMovie />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
