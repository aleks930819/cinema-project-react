import styles from './Form.module.css';

const Form = (props) => {
  return (
    <div className={styles['add-form-box']}>
      <form className={styles['add-form']} onSubmit={props.handler}>
        {props.children}
      </form>
    </div>
  );
};

export default Form;
