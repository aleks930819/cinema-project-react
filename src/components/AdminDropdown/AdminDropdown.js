import { Link } from 'react-router-dom';

import { GoChevronDown, GoChevronUp } from 'react-icons/go';

import { useState } from 'react';

import styles from './AdminDropdown.module.css';

const AdminDropDown = ({ options,onChange,buttonName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <ul className={styles['menu-items']} onClick={() => handleOptionClick(option)} key={option.value}>
       <Link to={option.value}> {option.label}</Link>
      </ul>
    );
  });

  const icon = <span>{isOpen ? <GoChevronUp /> : <GoChevronDown />} </span>;

  return (
    <div className={styles.dropdown}>
  <button onClick={handleClick}>{buttonName} <span>{icon}</span></button>

      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );

};

export default AdminDropDown;
