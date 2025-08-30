import React from 'react';
import '../styles/Signup.css';

function Signup() {
  return (
    <form>
      <div className="sign">
        <h2>Signup</h2>
        <input type="email" placeholder="Email" />
        <br />
        <input type="password" placeholder="Create Password" />
        <br />
        <input type="password" placeholder="Confirm Password" />
        <br />
        <a href="">Forget password ?</a>
        <br />
        <button type="button">Signup</button>
        <p>Already have an account? <a href="/login">login</a></p>
        <br />
        <div id="visible">
          <p style={{ visibility: 'unset' }}>---------------------Or---------------------</p>
        </div>
        <br />
        <button type="button">Signup With Facebook</button>
        <br />
        <button type="button">Signup With Google</button>
      </div>
    </form>
  );
}

export default Signup;
