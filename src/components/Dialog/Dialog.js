import ReactDOM from 'react-dom';


import styles from './Dialog.module.css';


const Dialog = ({ children, action }) => {

  return ReactDOM.createPortal(
    <div className={styles['dialog-box']}>
      <div className={styles['dialog-box-content']}>
        <div>{children}</div>
        <div className={styles['dialogs-btns']}>{action}</div>
      </div>
    </div>,
    document.querySelector('.dialog')
  );
};

export default Dialog;
