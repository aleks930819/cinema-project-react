import styles from './ValidationMessage.module.css';

const ValidationMessage = ({children}) => {
  return (
    <div className={styles['validation-message']}>
       {children}
    </div>
  );
};

export default ValidationMessage;
