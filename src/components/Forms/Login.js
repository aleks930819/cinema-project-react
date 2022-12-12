import { Link, useNavigate } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';

import styles from './Form.module.css';

import * as authServices from '../../services/authServices';
import { AuthCotnext } from '../../contexts/AuthContext';
import Button from '../Button/Button';
import setChangedValue from '../Utils/changeHandler';
import AddForm from '../AddForm/AddForm';
import AddFormInput from '../AddForm/AddFormInput';


const Login = () => {
  const { user, userLogin } = useContext(AuthCotnext);



  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();


  const changeHandler = (e) => {
    setChangedValue(e,setValues);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    authServices
      .login(values.email, values.password)
      .then((result) => userLogin(result));
    };
    
 
  useEffect(() => {
    if (user.email) {
      navigate('/');
    }
  }, [user.email,navigate]);

  return (
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

          />
          {/* <input
            type="text"
            htmlFor="email"
            placeholder="Your Email"
            value={values.email}
            name="email"
            onChange={changeHandler}
            required
          /> */}

          <AddFormInput
            element="input"
            type="password"
            htmlFor="password"
            placeholder="Password"
            name="password"
            value={values.name}
            handler={changeHandler}

          />
          {/* <input
            type="password"
            htmlFor="password"
            placeholder="Password"
            value={values.password}
            name="password"
            onChange={changeHandler}
            required
          /> */}
        
        <Button>Login</Button>
        <Link to="/register">Don't have an account? Register</Link>
    </AddForm>
  );
};

export default Login;
