import React from "react";
import Form from "./Form";

function Login() {
  return (
    <div class="loginBox">
      <h1>
        <strong>HelpDesk</strong> Login
      </h1>
      <Form />
      <div class="right">
        <a href="">
          <strong>I forgot my password</strong>
        </a>
      </div>
    </div>
  );
}

export default Login;
