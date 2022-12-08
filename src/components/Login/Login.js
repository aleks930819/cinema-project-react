import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    e.value = e.target.value;
  };

  const submitHandler = (e) => {
    e.preventDefault();

  };

  return (
    <div className="form-box">
      <form className="form" onSubmit={submitHandler}>
        <h2>LOGIN</h2>
        <div className="username">
          {/* <label id="username">Username</label> */}
          <input
            type="text"
            htmlFor="username"
            placeholder="Username"
            value={values.username}
            name="username"
            onChange={changeHandler}
          />
        </div>
        <div className="password">
          {/* <label id="password">Password</label> */}
          <input
            type="password"
            htmlFor="password"
            placeholder="Password"
            value={values.password}
            name="password"
            onChange={changeHandler}
          />
        </div>
        <button className="form-btn">
          Login
        </button>
        <Link to="/register">Don't have an account? Register</Link>
      </form>
    </div>
  );
};

export default Login;
