import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useValidators from '../../hooks/useValidators';
import Form from '../AddForm/Form';

import Button from '../Button/Button';
import setChangedValue from '../Utils/changeHandler';
import ValidationMessage from '../Validation/ValidationMessage';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  const [values, setValues] = useState({
    email: '',
    message: '',
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  const { message, checkEmail, checkMessage } = useValidators({
    email: values.email,
    text: values.message,
  });

  const disabled = values.email && values.message && !message;

  const submitHandler = (e) => {
    e.preventDefault();

    navigate('/message-sent');
  };

  return (
    <div className={styles['contact-us']}>
      <form className={styles['contact-us-form']} onSubmit={submitHandler}>
        <div className={styles['contact-us-email']}>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={values.email}
            onChange={changeHandler}
            onBlur={checkEmail}
            required
          />
          <p className={styles['contact-us-phone']}>Phone: +1 234 235</p>
        </div>

        <div className={styles['contact-us-message']}>
          <label>Your Message:</label>
          <textarea
            type="textarea"
            placeholder="Your Message"
            rows="8"
            name="message"
            value={values.message}
            onChange={changeHandler}
            onBlur={checkMessage}
            required
          />
        </div>
        {message && <ValidationMessage>{message}</ValidationMessage>}

        <Button disabled={!disabled} rounded>
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
