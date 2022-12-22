import { Link } from 'react-router-dom';

import styles from './AdminDropdown.module.css';

const Render = ({options,handleOptionCLick}) => {
  return options.map((option) => {
    return (
      <ul
        className={styles['menu-items']}
        onClick={() => handleOptionCLick(option)}
        key={option.value}
      >
        <Link to={option.value}> {option.label}</Link>
      </ul>
    );
  });
};

export default Render;
