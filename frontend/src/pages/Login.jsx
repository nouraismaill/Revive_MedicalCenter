import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen light">
      <form className="form">
        <div className="header">Log in</div>
        <div className="inputs">
          <input placeholder="Email" className="input" type="text" />
          <input placeholder="Password" className="input" type="password" />

          <button className="sigin-btn">Submit</button>

          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
