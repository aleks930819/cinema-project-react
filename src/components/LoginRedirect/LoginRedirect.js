import { Link } from 'react-router-dom';
import styles from './LoginRedirect.module.css';


const LoginRedirect = () => {
  return (
    <div className={styles['login-redirect-box']}>
    <div className={styles['login-redirect-container']}>
      <h2>You need to be logged in to book ticket</h2>
      <Link to='/login'>&#8594; Plase loggin in your Account </Link>
      </div>
    </div>
  );
};

export default LoginRedirect;
