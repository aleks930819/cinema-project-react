import { Link, useNavigate } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';

import styles from './Form.module.css';

import useHttp from '../../hooks/useHttp';
import { AuthCotnext } from '../../contexts/AuthContext';
import Button from '../Button/Button';
import setChangedValue from '../Utils/changeHandler';
import Form from '../AddForm/Form';
import FormInput from '../AddForm/FormInput';
import ValidationMessage from '../ValidationMessage/ValidationMessage';

const Login = () => {
  const { user, userLogin } = useContext(AuthCotnext);
  const [message, setMessage] = useState('');

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { error, sendRequest } = useHttp(userLogin);

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    sendRequest({
      endpoint: '/users/login',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { email: values.email, password: values.password },
    });
  };

  useEffect(() => {
    setMessage(error);
  }, [error]);

  localStorage.setItem('user', JSON.stringify(user));

  useEffect(() => {
    if (user.email) {
      navigate('/');
    }
  }, [user.email, navigate]);

  return (
    <div className="moveInRight">
      <div className={styles.login}>
        <Form handler={submitHandler}>
          <h2>LOGIN</h2>
          <FormInput
            element="input"
            type="text"
            htmlFor="email"
            placeholder="Your Email"
            name="email"
            value={values.name}
            handler={changeHandler}
            email={values.email}
            label="Email"
          />
          <FormInput
            element="input"
            type="password"
            htmlFor="password"
            placeholder="Password"
            name="password"
            value={values.name}
            handler={changeHandler}
            label="Password"
          />
          {message && <ValidationMessage>{message}</ValidationMessage>}
          <Link to="/register">Don't have an account? Register</Link>
          <Button rounded>Login</Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
