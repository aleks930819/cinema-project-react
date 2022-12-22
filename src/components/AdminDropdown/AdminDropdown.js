import { Link } from 'react-router-dom';

import { GoChevronDown, GoChevronUp } from 'react-icons/go';

import { useEffect, useRef, useState } from 'react';

import styles from './AdminDropdown.module.css';
import Render from './Render';

const AdminDropDown = ({ options, onChange, buttonName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  });

  // const renderedOptions = (
  //   <Render options={options} handleOptionCLick={handleOptionClick} />
  // );

  const renderedOptions = options.map((option) => {
    return (
      <ul
        className={styles['menu-items']}
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        <Link to={option.value}> {option.label}</Link>
      </ul>
    );
  });

  const icon = <span>{isOpen ? <GoChevronUp /> : <GoChevronDown />} </span>;

  return (
    <div ref={divEl} className={styles.dropdown}>
      <button onClick={handleClick}>
        {buttonName} <span>{icon}</span>
      </button>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default AdminDropDown;
