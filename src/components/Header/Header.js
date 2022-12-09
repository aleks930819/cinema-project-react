import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';


let activeStyle = {
  // textDecoration: 'underline',
  borderBottom: '2px solid white',
  paddingBottom: '2px',
};

const Header = () => {
  return (
    <header className={styles.header}>

      <div className={styles.links}>
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
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/weekly-program"
        >
          weekly program
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/contact-us"
        >
          contact us
        </NavLink>
        
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/add-movie"
        >
          add movie
        </NavLink>
       
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/logout"
        >
          logout
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
