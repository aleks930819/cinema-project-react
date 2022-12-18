import { Link } from 'react-router-dom';
import { GoChevronDown,GoChevronUp } from "react-icons/go";

import { useState } from 'react';

import styles from './AdminDropdown.module.css';

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  };

  const icon = <span>{open ? <GoChevronUp /> : <GoChevronDown  />} </span>;

  return (
    <div className={styles.dropdown}>
      <button onClick={handleDropdown}>Admin {icon}</button>
      {open ? (
        <ul className={styles['menu-items']}>
          <Link onClick={handleDropdown} to="/add-movie">
            Add Movie
          </Link>
          <Link onClick={handleDropdown} to="/add-cinema">
            Add Cinema
          </Link>
          <Link onClick={handleDropdown} to="/reserve-tickets">
            Tickets
          </Link>
          <Link onClick={handleDropdown} to="/users-list">
            Users
          </Link>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
