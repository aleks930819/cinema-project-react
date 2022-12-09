import { useContext } from 'react';
import { Context } from '../EditMovie/EditMovie';
import styles from './Dialog.module.css';


const Dialog = () => {
  const value = useContext(Context);

  return (
    <div className={styles['dialog-box']}>
      <h3>Are you sure?</h3>
      <div className={styles['dialogs-btns']}>
        <button onClick={() => value()} className={styles['dialog-btn-y']}>
          YES
        </button>
        <button className={styles['dialog-btn-n']}>NO</button>
      </div>
    </div>
  );
};

export default Dialog;
