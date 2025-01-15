import React from "react";
import "./Login.css";

function Login() {
  return (
    <React.Fragment>
      <div className="App-body">
        
        <form>
        <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email"></input>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password"></input>
          <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;