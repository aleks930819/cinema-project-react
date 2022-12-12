import { Route, Routes } from 'react-router-dom';

import { AuthCotnext, AuthProvider } from './contexts/AuthContext';

import AddMovie from './components/AddMovie/AddMovie';
import ContactUs from './components/ContactUs/ContactUs';
import DetailsCard from './components/DetailsCard/DetailsCard';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Login from './components/Auth/Login';
import MoviesData from './components/MoviesCatalog/Movies';
import Register from './components/Auth/Register';
import EditMovie from './components/EditMovie/EditMovie';
import { useState } from 'react';
import Logout from './components/Logout/Logout';
import Footer from './components/Footer/Footer';
import MessageSend from './components/MessageSend/MessageSend';
import Cinemas from './components/CInemas/Cinemas';
import AddCinema from './components/AddCinema/AddCinema';
import ScrollToTop from './components/Utils/ScrollToTop';

function App() {
  const [auth, setAuth] = useState({});

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
  };

  return (
    <>
      <AuthCotnext.Provider value={{ user: auth, userLogin, userLogout }}>
        <Header />
    <ScrollToTop/>
        <Routes>
          <Route path="/" element={<MoviesData />} />
          <Route path="/weekly-program" element={<MoviesData />} />
          <Route path="/details/:id" element={<DetailsCard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/edit/:id" element={<EditMovie />} />
          <Route path="/message-send" element={<MessageSend />} />
          <Route path="/cinemas" element={<Cinemas />} />
          <Route path="/add-cinema" element={<AddCinema />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthCotnext.Provider>
      <Footer />
    </>
  );
}

export default App;
