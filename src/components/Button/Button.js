import styles from './Button.module.css';

const { Link } = require('react-router-dom');

const Button = ({ to, type, disabled, children, ...rest }) => {
  if (to) {
    return (
      <Link to={to} className={styles['form-btn']}>
        {children}
      </Link>
    );
  }
  return (
    <button
      {...rest}
      className={styles['form-btn']}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
