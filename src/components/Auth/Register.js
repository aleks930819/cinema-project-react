import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import styles from './Form.module.css';

import * as authServices from '../../services/authServices';
import { AuthCotnext } from '../../contexts/AuthContext';
import Button from '../Button/Button';
import setChangedValue from '../Utils/changeHandler';
import AddForm from '../AddForm/AddForm';
import AddFormInput from '../AddForm/AddFormInput';
import ValidationMessage from '../Validation/ValidationMessage';

const Register = () => {
  const { user, userLogin } = useContext(AuthCotnext);
  const [message, setMessage] = useState('');

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    repassword: '',
  });

  
  const navigate = useNavigate();
  
  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  
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

  const checkUsername = () => {
    if (values.username === '') {
      setMessage('Please enter a username!');
    } else {
      setMessage('');
    }
  };

  
  const checkPassword = () => {
   
    if (values.password.length < 6) {
      setMessage('Password must be at least 6 characters');
    } else {
      setMessage('');
    }
  };

  const checkRepassword = () => {
 
    if (values.password !== values.repassword) {
      setMessage('Password dont match!');
    } else {
      setMessage('');
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    authServices
      .register(values.email, values.password,values.name)
      .then((authData) => userLogin(authData));
  };

  localStorage.setItem('user', JSON.stringify(user));

  useEffect(() => {
    if (user.email) {
      navigate('/');
    }
  }, [user.email, navigate]);

  return (
    <div className='moveInRight'>

    <AddForm handler={submitHandler}>
      <h2>REGISTER</h2>

      <AddFormInput
        element="input"
        type="text"
        htmlFor="name"
        placeholder="Name"
        name="name"
        value={values.name}
        handler={changeHandler}
        onBlur={checkUsername}
        label="Name"
      />

      <AddFormInput
        element="input"
        type="text"
        htmlFor="email"
        placeholder="Your Email"
        name="email"
        value={values.name}
        handler={changeHandler}
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
        onBLur={checkPassword}
        label="Password"
      />
      <AddFormInput
        element="input"
        type="password"
        htmlFor="password"
        placeholder="Confirm Password"
        name="repassword"
        value={values.name}
        handler={changeHandler}
        onBlur={checkRepassword}
        label="Repeat Password"
      />
      {message && <ValidationMessage>{message}</ValidationMessage>}

      <Link to="/login">You already have an account? Login</Link>
      <Button>Register</Button>
    </AddForm>
    </div>
  );
};

export default Register;
