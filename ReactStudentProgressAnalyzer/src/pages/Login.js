import React from 'react';
import '../styles/Login.css';

function Login() {
  return (
    <form>
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <a href="">Forget password ?</a>
      <br />
      <button type="button">Login</button>
      <p>Don't have an account? <a href="/signup">signup</a></p>
      <br />
      <p>---------------------Or---------------------</p>
      <br />
      <button type="button">Login With Facebook</button>
      <br />
      <button type="button">Login With Google</button>
    </form>
  );
}

export default Login;
