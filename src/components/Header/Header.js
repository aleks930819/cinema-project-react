import { Link} from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

import { useContext, useState } from 'react';

import styles from './Header.module.css';

import { AuthCotnext } from '../../contexts/AuthContext';
import Admin from '../AdminDropdown/Admin';

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

          <Link to="/weekly-program" onClick={() => setOpen(false)}>
            weekly program
          </Link>

          <Link to="/contact-us" onClick={() => setOpen(false)}>
            contact us
          </Link>

          <Link to="/cinemas" onClick={() => setOpen(false)}>
            cinemas
          </Link>
          {user.email ? (
            <>
              <Link to="/profile/edit" onClick={() => setOpen(false)}>
                edit profile
              </Link>

              <Link to="/my-tickets" onClick={() => setOpen(false)}>
                My Tickets
              </Link>

              <Link to="/logout" onClick={() => setOpen(false)}>
                logout
              </Link>

              {user.isAdmin ? <Admin /> : ''}
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>
                login
              </Link>
              <Link to="/register" onClick={() => setOpen(false)}>
                register
              </Link>
            </>
          )}
        </div>

        <div className={styles['footer-icons']}>
          <ul>
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsYoutube />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
