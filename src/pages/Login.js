import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from "../config/firebase.js";
// import { getAuth } from "firebase/compat/auth";
import "../static/styles/Login.css";

function Login() {
  // Change URL
  const navigate = useNavigate();

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  /************************************** */
  // TODO: CUSTOM AUTH SYSTEM
  //https://firebase.google.com/docs/auth/admin/create-custom-tokens
  //https://firebase.google.com/docs/auth/web/custom-auth
  //https://firebase.google.com/docs/auth/web/manage-users
  /************************************** */

  const signIn = (e) => {
    e.preventDefault();
    // firebase login
    const user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  console.log(auth);
  const register = (e) => {
    e.preventDefault();
    // firebase register
    const user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((auth) => {
        console.log(auth);
        const data = {
          email: user.email,
          username: user.username,
        };
        db.collection("users")
          .add(data)
          .then((res) => console.log(res));
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));

    db.collection("users").get();
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
          <h5>Username</h5>
          <input name="username" type="text" ref={usernameRef} />
          <h5>E-mail</h5>
          <input name="email" type="text" ref={emailRef} />
          <h5>Password</h5>
          <input name="password" type="password" ref={passwordRef} />
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
