import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase.js";
import "./Login.css";

function Login() {
  // Change URL
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    // firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="logo.png"
        ></img>
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__signin-btn" onClick={signIn}>
            Sign in
          </button>
        </form>
        <p>
          BY SIGNING-IN, You acknowledge that you have read and understand the
          terms and conditions of CASTREJON'S AMAZON CLONE.
        </p>
        <button onClick={register} className="login__register-btn">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
