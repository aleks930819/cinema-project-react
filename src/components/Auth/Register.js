import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { AuthCotnext } from '../../contexts/AuthContext';
import Button from '../Button/Button';
import setChangedValue from '../Utils/changeHandler';
import AddForm from '../AddForm/AddForm';
import AddFormInput from '../AddForm/AddFormInput';
import ValidationMessage from '../Validation/ValidationMessage';
import useHttp from '../../hooks/useHttp';
import useValidators from '../../hooks/useValidators';

const Register = () => {
  const { user, userLogin } = useContext(AuthCotnext);

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

  // const checkEmail = () => {
  //   let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  //   if (values.email === '') {
  //     setMessage('Invalid email!');
  //   }
  //   if (!pattern.test(values.email)) {
  //     setMessage('Invalid email!');
  //   } else {
  //     setMessage('');
  //   }
  // };

  // const checkPassword = () => {
  //   if (6 > values.password.length) {
  //     setMessage('Password must be at least 6 characters');
  //   } else {
  //     setMessage('');
  //   }
  // };

  // const checkRepassword = () => {
  //   if (6 > values.password.length) {
  //     setMessage('Password must be at least 6 characters');
  //   } else if (values.password !== values.repassword) {
  //     setMessage('Password dont match!');
  //   } else {
  //     setMessage('');
  //   }
  // };

  const { message, setMessage, checkEmail, checkPassword, checkRepassword } =
    useValidators({
      email: values.email,
      password: values.password,
      repassword: values.repassword,
    });

  const { isLoading, error, sendRequest } = useHttp(userLogin);

  useEffect(() => {
    setMessage(error);
  }, [error,setMessage]);

  const submitHandler = (e) => {
    e.preventDefault();

    sendRequest({
      endpoint: '/users/register',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        email: values.email,
        password: values.password,
        name: values.name,
      },
    });
  };


  localStorage.setItem('user', JSON.stringify(user));

  useEffect(() => {
    if (user.email) {
      navigate('/');
    }
  }, [user.email, navigate]);

  return (
    <div className="moveInRight">
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
          onBlur={checkPassword}
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
        <Button green rounded>
          Register
        </Button>
      </AddForm>
    </div>
  );
};

export default Register;
