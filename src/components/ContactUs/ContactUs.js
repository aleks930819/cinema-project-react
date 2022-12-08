import { useState } from 'react';

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
    console.log(values);
  };


  return (
    <div className="contact-us">
      <form className="contact-us-form" onSubmit={submitHandler}>
        <div className="contact-us-email">
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={values.email}
            onChange={changeHandler}
            required
          />
          <p className="contact-us-phone">Phone: +1 234 235</p>
        </div>

        <div className="contact-us-message">
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

        <button className="form-btn">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
