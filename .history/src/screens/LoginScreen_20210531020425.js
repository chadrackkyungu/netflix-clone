import React from 'react';
import './LoginScreen.css';

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="http://www.nedpoulter.com/wp-content/uploads/2015/01/Netflix-logo.png"
          alt=""
        />
        <button className="loginScreen__button">Sign In</button>
        <div className="loginScreen__gradient"></div>
      </div>

      <div className="loginScreen__body">
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
        </>
      </div>
    </div>
  );
}

export default LoginScreen;
