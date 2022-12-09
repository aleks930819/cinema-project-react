import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Form.module.css';

import * as authServices from '../../services/authServices';

const Register = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    repassword: '',
  });

  const navigate = useNavigate();


  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    e.value = e.target.value;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    authServices
      .register(values.email, values.password)
      .then((result) => console.log(result));

      navigate('/');

  };

  return (
    <div className={styles['form-box']}>
    <form className={styles['form']} onSubmit={submitHandler}>
        <h2>REGISTER</h2>
        <div className={styles.email}>
          {/* <label id="email">email</label> */}
          <input
            type="text"
            htmlFor="email"
            placeholder="Your Email"
            name="email"
            value={values.email}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles.password}>
          {/* <label id="password">Password</label> */}
          <input
            type="password"
            htmlFor="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={changeHandler}
            required

          />
        </div>

        <div className={styles.password}>
          {/* <label id="password">Confirm Password</label> */}
          <input
            type="password"
            htmlFor="password"
            placeholder="Confirm Password"
            name="repassword"
            value={values.repassword}
            onChange={changeHandler}
            required

          />
        </div>
        <button className={styles['form-btn']}>Register</button>

        <Link to="/login">You already have an account? Login</Link>
      </form>
    </div>
  );
};

export default Register;
