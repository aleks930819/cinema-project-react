import { Link } from 'react-router-dom';

import styles from './FancyButton.module.css';



const FancyButton = (props) => {
    return (
        <Link to={props.to} className={styles['fancy-button']}>
          {props.children}
        </Link>
      );
};

export default FancyButton;