import React from 'react';
import './SignUpScreen.css';

function SignUpScreen() {
  const register = (e) => {
    e.preventDefault();
  };
  const signUp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="Email" placeholder="email" />
        <input type="password" placeholder="password" />
        {/* use type submit preferable */}
        <button type="submit">Sign In</button>

        <h4>
          <span className="signUpScreen__gray">New to Netflix? </span>
          <span className="signUpScreen__link">SignUp now</span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
