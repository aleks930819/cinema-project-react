import styles from './AddForm.module.css';

const AddForm = (props) => {
  return (
    <div className={styles['add-form-box']}>
      <form className={styles['add-form']} onSubmit={props.handler}>
        {props.children}
      </form>
    </div>
  );
};

export default AddForm;
