import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Logout from './Logout';
import Login from './Login';

export default () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
  });

  return (
    <div className="page">
      <h1>React - Firebase Login</h1>
      {user ? <Logout username={user.displayName} /> : <Login />}
    </div>
  );
};
