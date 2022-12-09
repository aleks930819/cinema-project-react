import styles from './ErrorPage.module.css';

const ErrorPage = () => {
 return (
     <div className={styles['not-found']}>
     <h2 className={styles['not-found-text']}>The page is not found!</h2>
     </div>
 );
};

export default ErrorPage;