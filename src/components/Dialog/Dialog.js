import { useContext } from 'react';

import styles from './Dialog.module.css';

import { MovieContext } from '../../contexts/MovieContext';



const Dialog = () => {
  const {deleteMovie,setDialog} = useContext(MovieContext);


  return (
    <div className={styles['dialog-box']}>
      <h3>Are you sure?</h3>
      <div className={styles['dialogs-btns']}>
        <button onClick={() => deleteMovie()} className={styles['dialog-btn-y']}>
          YES
        </button>
        <button onClick= {() => setDialog({isLoading:false})} className={styles['dialog-btn-n']}>NO</button>
      </div>
    </div>
  );
};

export default Dialog;
