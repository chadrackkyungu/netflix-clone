import React from 'react';
import {useSelector} from 'react-redux';
import Nav from '../Nav';
import './ProfileScreen.css';
import {selectUser} from '../features/userSlice';
import {auth} from '../firebase';

function ProfileScreen() {
  const user = useSelector(selectUser);
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

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
