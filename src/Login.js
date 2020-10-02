import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { Link, useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login_logo'
          src='https://logotyp.us/file/amazon.svg'
          alt=''
        />
      </Link>
      <div className='login_container'>
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' onClick={signIn} className='login_signInButton'>
            Signin
          </button>
        </form>

        <p>
          By Signing-in you agree to Amazon Clone Conditions of Use & Sale.
          Please see our Privacy Notice
        </p>

        <button className='login_registerButton' onClick={register}>
          Create Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
