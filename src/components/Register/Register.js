import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="form-box">
      <form className="form">
        <h2>REGISTER</h2>
        <div className="username">
          {/* <label id="username">Username</label> */}
          <input
            type="text"
            htmlFor="username"
            placeholder="Username"
            name="username"
          />
        </div>
        <div className="password">
          {/* <label id="password">Password</label> */}
          <input
            type="password"
            htmlFor="password"
            placeholder="Password"
            name="password"
          />
        </div>

        <div className="password">
          {/* <label id="password">Confirm Password</label> */}
          <input
            type="password"
            htmlFor="password"
            placeholder="Confirm Password"
            name="repassword"

          />
        </div>
        <button className="form-btn" type="button">
          Register
        </button>

        <Link to="/login">You already have an account? Login</Link>
      </form>
    </div>
  );
};

export default Register;
