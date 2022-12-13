import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import styles from './Form.module.css';

import * as authServices from '../../services/authServices';
import { AuthCotnext } from '../../contexts/AuthContext';
import Button from '../Button/Button';
import setChangedValue from '../Utils/changeHandler';
import AddForm from '../AddForm/AddForm';
import AddFormInput from '../AddForm/AddFormInput';

const Register = () => {
  const { user, userLogin } = useContext(AuthCotnext);

  

  const errors = {};

  const [values, setValues] = useState({
    email: '',
    username:'',
    password: '',
    repassword: '',
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    authServices
      .register(values.email, values.password,values.username)
      .then((authData) => userLogin(authData));
  };
  
  localStorage.setItem('user', JSON.stringify(user));


  useEffect(() => {
    if (user.email) {
      navigate('/');
    }
  }, [user.email, navigate]);

  return (
    <AddForm handler={submitHandler}>
      <h2>REGISTER</h2>

      <AddFormInput
        element="input"
        type="text"
        htmlFor="username"
        placeholder="Username"
        name="username"
        value={values.name}
        handler={changeHandler}
      />

      <AddFormInput
        element="input"
        type="text"
        htmlFor="email"
        placeholder="Your Email"
        name="email"
        value={values.name}
        handler={changeHandler}
      />
      <AddFormInput
        element="input"
        type="password"
        htmlFor="password"
        placeholder="Password"
        name="password"
        value={values.name}
        handler={changeHandler}
      />
      <AddFormInput
        element="input"
        type="password"
        htmlFor="password"
        placeholder="Confirm Password"
        name="repassword"
        value={values.name}
        handler={changeHandler}
      />
      <Button>Register</Button>
      <Link to="/login">You already have an account? Login</Link>
    </AddForm>
  );
};

export default Register;
