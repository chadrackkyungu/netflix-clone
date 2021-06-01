import React from 'react';
import Nav from '../Nav';
import './ProfileScreen.css';

function ProfileScreen() {
  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
      </div>
    </div>
  );
}

export default ProfileScreen;
