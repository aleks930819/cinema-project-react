import { GoChevronDown, GoChevronUp } from 'react-icons/go';

import { useEffect, useRef, useState } from 'react';

import styles from './Dropdown.module.css';
import RenderOptions from './RenderOptions';

const DropDown = ({ options,  buttonName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
    
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

  const renderedOptions = (
    <RenderOptions options={options} handleOptionCLick={handleOptionClick} />
  );

  const icon = (
    <span>
      {isOpen ? (
        <GoChevronUp className={styles.icon} />
      ) : (
        <GoChevronDown className={styles.icon} />
      )}{' '}
    </span>
  );

  return (
    <div ref={divEl} className={styles.dropdown}>
      <button onClick={handleClick}>
        {buttonName} {icon}
      </button>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default DropDown;
