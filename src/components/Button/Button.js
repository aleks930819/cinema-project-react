import styles from './Button.module.css';

const { Link } = require('react-router-dom');

const Button = (props) => {
  if (props.to) {
    return (
      <Link to={props.to} className={styles['form-btn']}>
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={styles['form-btn']}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
