import React from 'react';
import './SignUpScreen';

function SignUpScreen() {
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="Email" placeholder="email" />
        <input type="password" placeholder="password" />
        {/* use type submit preferable */}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignUpScreen;
