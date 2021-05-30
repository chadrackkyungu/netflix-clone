import React, {useState, useEffect} from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.screenY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);

    return () => {
      window.removeEventListener('scroll', transitionNavbar);
    };
  }, []);
  return (
    <div className="nav nav__black">
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="http://www.nedpoulter.com/wp-content/uploads/2015/01/Netflix-logo.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://tse1.mm.bing.net/th?id=OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa&pid=Api&P=0&w=300&h=300"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
