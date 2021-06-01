import React, {useRef} from 'react';
import {auth} from '../firebase';
import './SignUpScreen.css';

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    );
  };
  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="Email" placeholder="email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        {/* use type submit preferable */}
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signUpScreen__gray">New to Netflix? </span>
          <span className="signUpScreen__link" onClick={register}>
            SignUp now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
