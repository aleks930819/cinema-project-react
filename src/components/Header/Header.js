import { NavLink } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

import { useContext, useState } from 'react';

import styles from './Header.module.css';

import { AuthCotnext } from '../../contexts/AuthContext';
import Dropdown from '../AdminDropdown/AdminDropdown';
import Admin from '../AdminDropdown/Admin';

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
          {user.email && (
            <div className={styles.welcome}>Welcome {user.name}!</div>
          )}

          <NavLink
            to="/weekly-program"
            onClick={() => setOpen(false)}
          >
            weekly program
          </NavLink>

          <NavLink
            to="/contact-us"
            onClick={() => setOpen(false)}
          >
            contact us
          </NavLink>

          <NavLink
            to="/cinemas"
            onClick={() => setOpen(false)}
          >
            cinemas
          </NavLink>
          {user.email ? (
            <>
              <NavLink
                to="/logout"
                onClick={() => setOpen(false)}
              >
                logout
              </NavLink>

              <NavLink
                to="/profile"
                onClick={() => setOpen(false)}
              >
                profile
              </NavLink>

              {user.isAdmin ? <Admin /> : ''}
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
              >
                login
              </NavLink>
              <NavLink
                to="/register"
                onClick={() => setOpen(false)}
              >
                register
              </NavLink>
            </>
          )}
        </div>

        <div className={styles['footer-icons']}>
          <ul>
            <li>  <BsFacebook /></li>
            <li>  <BsTwitter /></li>
            <li>  <BsInstagram /></li>
            <li>  <BsYoutube /></li>
          </ul>
          
        </div>
        
      </header>
    </>
  );
};

export default Header;
