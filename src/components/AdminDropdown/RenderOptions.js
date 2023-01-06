import { Link } from 'react-router-dom';

import styles from './Dropdown.module.css';

const RenderOptions = ({ options, handleOptionCLick }) => {
  return options.map((option) => {
    return (
      <ul
        className={styles['menu-items']}
        onClick={handleOptionCLick}
        key={option.value}
      >
        <Link to={option.value}> {option.label}</Link>
      </ul>
    );
  });
};

export default RenderOptions;
