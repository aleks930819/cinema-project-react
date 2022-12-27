import { Link, useNavigate } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';

import styles from './Form.module.css';

import useHttp from '../../hooks/useHttp';
import * as authServices from '../../services/authServices';
import { AuthCotnext } from '../../contexts/AuthContext';
import Button from '../Button/Button';
import setChangedValue from '../Utils/changeHandler';
import AddForm from '../AddForm/AddForm';
import AddFormInput from '../AddForm/AddFormInput';
import ValidationMessage from '../Validation/ValidationMessage';

const Login = () => {
  const { user, userLogin } = useContext(AuthCotnext);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [currentUser, setCurrentUser] = useState();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const checkEmail = () => {
    let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (values.email === '') {
      setMessage('Invalid email!');
    }
    if (!pattern.test(values.email)) {
      setMessage('Invalid email!');
    } else {
      setMessage('');
    }
  };

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  const { isLoading, error, sendRequest } = useHttp(userLogin);

  const submitHandler = async (e) => {
    e.preventDefault();

    sendRequest({
      endpoint: '/users/login',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { email: values.email, password: values.password },
    });

    // authServices
    //   .login(values.email, values.password)
    //   .then((result) => userLogin(result))
    //   .catch((err) => setErrorMessage(err.message));
  };

  if (error) {
    console.log(error);
  }

  localStorage.setItem('user', JSON.stringify(user));

  useEffect(() => {
    if (user.email) {
      navigate('/');
    }
  }, [user.email, navigate]);

  return (
    <div className="moveInRight">
      <div className={styles.login}>
        <AddForm handler={submitHandler}>
          <h2>LOGIN</h2>
          <AddFormInput
            element="input"
            type="text"
            htmlFor="email"
            placeholder="Your Email"
            name="email"
            value={values.name}
            handler={changeHandler}
            email={values.email}
            onBlur={checkEmail}
            label="Email"
          />

          <AddFormInput
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
          <Button  rounded>
            Login
          </Button>
        </AddForm>
      </div>
    </div>
  );
};

export default Login;
