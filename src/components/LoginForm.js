import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./store/ducks/login";

const LoginForm = () => {
  const loginStatus = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const loginHandler = (event) => {
    event.preventDefault();

    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    if (
      user.username === "teste@email.com" &&
      user.password === "senhadeteste"
    ) {
      alert("Logged in successfully");
      dispatch(login());
    } else {
      alert("Username or password incorret.");
    }
  };

  const logoutHandler = () => {
    alert("Logged out successfully.");
    dispatch(logout());
  };

  return (
    <div>
      {!loginStatus && (
        <form>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            defaultValue="teste@email.com"
            ref={usernameRef}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            defaultValue="senhadeteste"
            ref={passwordRef}
          />
          <button onClick={loginHandler}>Enter</button>
        </form>
      )}

      {loginStatus && <button onClick={logoutHandler}>Logout</button>}
    </div>
  );
};

export default LoginForm;
