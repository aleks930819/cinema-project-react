import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="links">
        <Link to="/login">LOGIN</Link>
        <Link to="/register">REGISTER</Link>
        <Link to="/weekly-program">WEEKLY PROGRAM</Link>
        <Link to="/add-movie">ADD MOVIE</Link>
        <Link to="/contact-us">CONTACT US</Link>
        <Link to="/logout">LOGOUT</Link>
      </div>
    </header>
  );
};

export default Header;
