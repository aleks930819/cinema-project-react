import { Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { AuthCotnext, AuthProvider } from './contexts/AuthContext';
import { MovieProvider } from './contexts/MovieContext';


import AddMovie from './components/AddMovie/AddMovie';
import ContactUs from './components/ContactUs/ContactUs';
import DetailsCard from './components/DetailsCard/DetailsCard';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Login from './components/Auth/Login';
import MoviesData from './components/MoviesCatalog/Movies';
import Register from './components/Auth/Register';
import EditMovie from './components/EditMovie/EditMovie';
import Logout from './components/Logout/Logout';
import Footer from './components/Footer/Footer';
import MessageSend from './components/MessageSend/MessageSend';
import Cinemas from './components/CInemas/Cinemas';
import AddCinema from './components/AddCinema/AddCinema';
import ScrollToTop from './components/Utils/ScrollToTop';
import Ticket from './components/Tickets/Ticket';
import UserProfile from './components/UserProfile/UserProfile';
import EditUser from './components/UserProfile/EditUser';
import ReserveTickets from './components/ReserveTickets/ReserveTickets';

function App() {
  const [auth, setAuth] = useState({});


  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setAuth(foundUser);
    }
  }, []);


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
        <MovieProvider>
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
          <Route path="/ticket/:id" element={<Ticket />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/edit" element={<EditUser />} />
          <Route path="/reserve-tickets" element={<ReserveTickets />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </MovieProvider>
          
      </AuthCotnext.Provider>
      <Footer />
    </>
  );
}

export default App;
