import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthCotnext } from '../../contexts/AuthContext';
import styles from './Header.module.css';

let activeStyle = {
  // textDecoration: 'underline',
  borderBottom: '2px solid white',
  paddingBottom: '2px',
};

const Header = () => {
  const { user } = useContext(AuthCotnext);

  return (
    <header className={styles.header}>
      <div className={styles.links}>
      <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/weekly-program"
            >
              weekly program
            </NavLink>
        {user.email ? (
          <>
           
          
            {user.email === 'admin@abv.bg' ? 
              <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/add-movie"
            >
              add movie
            </NavLink>
            :
            ''
            } 
            

            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/logout"
            >
              logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/login"
            >
              login
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/register"
            >
              register
            </NavLink>
          </>
        )}
        <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/contact-us"
            >
              contact us
            </NavLink>
         {user.username && <span className={styles.welcome}>Welcome back {user.username}!</span>}

      </div>
    </header>
  );
};

export default Header;
