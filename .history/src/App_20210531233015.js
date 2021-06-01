import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeSreen';
import LoginScreen from './screens/LoginScreen';
import {auth} from './firebase';
import {useDispatch} from 'react-redux';
import {login, logout} from './features/userSlice';

function App() {
  const user = null;
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubScribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.uid,
          })
        );
      } else {
        dispatch(logout);
      }
    });

    return unsubScribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
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
