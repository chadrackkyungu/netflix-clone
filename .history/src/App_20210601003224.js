import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeSreen';
import LoginScreen from './screens/LoginScreen';
import {auth} from './firebase';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectUser} from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  //now we are grabbing that user & say if it null don't go to home page but if the action that we trigger (login/ sign) goes true then go to home screen
  const user = useSelector(selectUser); //this came from userSlice.js line 25
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubScribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubScribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
