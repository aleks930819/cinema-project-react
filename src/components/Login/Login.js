import { Link } from "react-router-dom";



const Login = () => {
  return (
    <div className="form-box">
    <form className="form">
      <h2>LOGIN</h2>
      <div className="username">
        {/* <label id="username">Username</label> */}
        <input type="text" htmlFor="username"  placeholder="Username" name="username"/>
      </div>
      <div className="password">
        {/* <label id="password">Password</label> */}
        <input type="password"  htmlFor="password" placeholder="Password" name="password" />
      </div>
      <button className="form-btn" type="button">Login</button>
      <Link to='/register'>Don't have an account? Register</Link>
    </form>
    </div>
  );
};

export default Login;
