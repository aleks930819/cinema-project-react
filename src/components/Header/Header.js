import { NavLink } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';

import { useContext, useState } from 'react';

import styles from './Header.module.css';

import { AuthCotnext } from '../../contexts/AuthContext';

let activeStyle = {
  borderBottom: '2px solid white',
  paddingBottom: '2px',
};

const Header = () => {
  const { user } = useContext(AuthCotnext);

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <FiAlignJustify
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
        />
        <div
          style={{
            display: open ? 'flex' : '',
          }}
          className={styles.links}
        >
         {user.username && (
            <div className={styles.welcome}>
              Welcome back {user.username}!
            </div>
          )}
          
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/weekly-program"
            onClick={() => setOpen(false)}
          >
            weekly program
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/contact-us"
            onClick={() => setOpen(false)}
          >
            contact us
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/cinemas"
            onClick={() => setOpen(false)}
          >
            cinemas
          </NavLink>
          {user.email ? (
            <>
              {user.email === 'admin@abv.bg' ? (
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/add-movie"
                  onClick={() => setOpen(false)}
                >
                  add movie
                </NavLink>
              ) : (
                ''
              )}

              {user.email === 'admin@abv.bg' ? (
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/add-cinema"
                  onClick={() => setOpen(false)}
                >
                  add cinema
                </NavLink>
              ) : (
                ''
              )}

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/logout"
                onClick={() => setOpen(false)}
              >
                logout
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/profile"
                onClick={() => setOpen(false)}
              >
                profile
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/login"
                onClick={() => setOpen(false)}
              >
                login
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/register"
                onClick={() => setOpen(false)}
              >
                register
              </NavLink>
            </>
          )}
        

         
        </div>
      </header>
    </>
  );
};

export default Header;
