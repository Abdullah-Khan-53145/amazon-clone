import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://thumbs.dreamstime.com/b/amazon-155631949.jpg"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <input type="submit" className="login__registerButton" value="Sign In" />
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Co nditions of use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          internet based Ads Notice
        </p>
      </div>
    </div>
  );
}

export default Login;
