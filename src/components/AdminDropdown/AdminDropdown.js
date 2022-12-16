import { Link } from 'react-router-dom';

import { useState } from 'react';

import styles from './AdminDropdown.module.css';



const Dropdown = () => {

  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={handleDropdown}>Admin</button>
      {open ? (
        <li className={styles['menu-items']}>
          <Link onClick={handleDropdown} to="/add-movie">Add Movie</Link>
          <Link  onClick={handleDropdown} to="/add-cinema">Add Cinema</Link>
          <Link  onClick={handleDropdown} to="/reserve-tickets">Tickets</Link>
        </li>
      ) : null}
    </div>
  );
};

export default Dropdown;
