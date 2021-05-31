import React from 'react';
import './LoginScreen.css';

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://tse2.mm.bing.net/th?id=OIP.iFeo2SoGPotEj82ktOatbQHaEo&pid=Api&P=0&w=310&h=195"
          alt=""
        />
        <button className="loginScreen__button">Sign In</button>
      </div>
    </div>
  );
}

export default LoginScreen;
