import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);

    return () => window.removeEventListener('scroll', transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="http://www.nedpoulter.com/wp-content/uploads/2015/01/Netflix-logo.png"
          alt=""
        />
        <img
          //Note: this => /profile as to be the same as the one inside App.js online 39
          onClick={() => history.push('/profile')}
          className="nav__avatar"
          src="https://tse1.mm.bing.net/th?id=OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa&pid=Api&P=0&w=300&h=300"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
