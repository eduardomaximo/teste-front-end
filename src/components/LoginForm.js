import React from "react";

const LoginForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </form>
    </div>
  );
};

export default LoginForm;
