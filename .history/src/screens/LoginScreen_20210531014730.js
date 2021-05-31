import React from 'react';
import './LoginScreen.css';

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://tse3.mm.bing.net/th?id=OIP.cV5pF2087HRQSzrgDyZ2xgHaB_&pid=Api&P=0&w=576&h=156"
          alt=""
        />
        <button className="loginScreen__button">Sign In</button>
        <div className="loginScreen__gradient"></div>
      </div>
    </div>
  );
}

export default LoginScreen;
