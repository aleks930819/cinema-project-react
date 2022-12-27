import { Link } from 'react-router-dom';

import className from 'classnames';

import './Button.css';

const Button = ({
  to,
  type,
  disabled,
  children,
  green,
  danger,
  opacity,
  rounded,
  fancy,
  ...rest
}) => {
  const classes = className('btn', {
    green: green,
    danger: danger,
    opacity: opacity,
    rounded: rounded,
    fancy:fancy,
  });

  if (to) {
    return (
      <Link {...rest} to={to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button {...rest} className={classes} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
