import { useEffect, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import styles from './Form.module.css';
import * as authServices from '../../services/authServices';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    e.value = e.target.value;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    authServices
      .login(values.email, values.password)
      .then((result) => console.log(result));

      navigate('/');
  };

  return (
    <div className={styles['form-box']}>
      <form className={styles['form']} onSubmit={submitHandler}>
        <h2>LOGIN</h2>
        <div className={styles.email}>
          {/* <label id="email">email</label> */}
          <input
            type="text"
            htmlFor="email"
            placeholder="Your Email"
            value={values.email}
            name="email"
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
            value={values.password}
            name="password"
            onChange={changeHandler}
            required

          />
        </div>
        <button className={styles['form-btn']}>Login</button>
        <Link to="/register">Don't have an account? Register</Link>
      </form>
    </div>
  );
};

export default Login;
