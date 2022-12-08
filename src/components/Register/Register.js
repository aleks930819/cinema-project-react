import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    repassword: '',
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
        <h2>REGISTER</h2>
        <div className="username">
          {/* <label id="username">Username</label> */}
          <input
            type="text"
            htmlFor="username"
            placeholder="Username"
            name="username"
            value={values.username}
            onChange={changeHandler}
          />
        </div>
        <div className="password">
          {/* <label id="password">Password</label> */}
          <input
            type="password"
            htmlFor="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={changeHandler}
          />
        </div>

        <div className="password">
          {/* <label id="password">Confirm Password</label> */}
          <input
            type="password"
            htmlFor="password"
            placeholder="Confirm Password"
            name="repassword"
            value={values.repassword}
            onChange={changeHandler}
          />
        </div>
        <button className="form-btn">Register</button>

        <Link to="/login">You already have an account? Login</Link>
      </form>
    </div>
  );
};

export default Register;
