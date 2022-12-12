
import { useState } from 'react';

import Button from '../Button/Button';
import styles from './ContactUs.module.css';


const ContactUs = () => {
  const [values, setValues] = useState({
    email: '',
    message: '',
  });

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    e.value = e.target.value;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setValues((oldState) => ({
      ...oldState,
      email: '',
      message: '',
    }));
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
            required
          />
        </div>

        <Button to="/message-send">
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
