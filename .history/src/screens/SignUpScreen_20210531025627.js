import React from 'react';
import './SignUpScreen.css';

function SignUpScreen() {
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="Email" placeholder="email" />
        <input type="password" placeholder="password" />
        {/* use type submit preferable */}
        <button type="submit">Sign In</button>

        <h4>
          {' '}
          <span className="signUpScreen__gray">New to Netflix? </span> SignUp
          now.{' '}
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
