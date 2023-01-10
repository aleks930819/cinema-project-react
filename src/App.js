import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import AddMovie from './components/AddMovie/AddMovie';
import ContactUs from './components/ContactUs/ContactUs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Login from './components/Auth/Login';
import MoviesData from './components/MoviesCatalog/Movies';
import Register from './components/Auth/Register';
import EditMovie from './components/EditMovie/EditMovie';
import Logout from './components/Logout/Logout';
import MessageSend from './components/MessageSend/MessageSend';
import Cinemas from './components/CInemas/Cinemas';
import AddCinema from './components/AddCinema/AddCinema';
import ScrollToTop from './components/Utils/ScrollToTop';
import Ticket from './components/Tickets/Ticket';
import Trailer from './components/Trailer/Trailer';

import UserProfile from './components/UserProfile/UserProfile';
import EditUser from './components/UserProfile/EditUser';
import ReserveTickets from './components/ReserveTickets/ReserveTickets';
import GetAllUsers from './components/GetAllUsers/GetAllUsers';
import UserTickets from './components/UserTickets/UserTickets';
import MoviesList from './components/MoviesList/MoviesList';
import CinemasList from './components/CinemasList/CinemasList';
import EditCinema from './components/EditCinema/EditCinema';
import ProtectedRoute from './components/Utils/ProtectedRoute';

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MoviesData />} />
            <Route path="/weekly-program" element={<MoviesData />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/add-movie"
              element={
                <ProtectedRoute>
                  <AddMovie />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-movie/:id"
              element={
                <ProtectedRoute>
                  <EditMovie />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-cinema/:id"
              element={
                <ProtectedRoute>
                  <EditCinema />
                </ProtectedRoute>
              }
            />

            <Route path="/message-sent" element={<MessageSend />} />
            <Route path="/cinemas" element={<Cinemas />} />
            <Route
              path="/add-cinema"
              element={
                <ProtectedRoute>
                  <AddCinema />
                </ProtectedRoute>
              }
            />
            <Route path="/ticket/:id" element={<Ticket />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/profile/edit" element={<EditUser />} />
            <Route
              path="/reserve-tickets"
              element={
                <ProtectedRoute>
                  <ReserveTickets />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users-list"
              element={
                <ProtectedRoute>
                  <GetAllUsers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/movies-list"
              element={
                <ProtectedRoute>
                  <MoviesList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cinemas-list"
              element={
                <ProtectedRoute>
                  <CinemasList />
                </ProtectedRoute>
              }
            />

            <Route path="/trailer/:id" element={<Trailer />} />
            <Route path="/my-tickets" element={<UserTickets />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </AuthProvider>
    </>
  );
}

export default App;
