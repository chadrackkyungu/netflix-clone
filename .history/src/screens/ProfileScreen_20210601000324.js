import React from 'react';
import Nav from '../Nav';
import './ProfileScreen.css';

function ProfileScreen() {
  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa&pid=Api&P=0&w=300&h=300"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
