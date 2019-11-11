import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export default () => {
  const handleLogin = async _event => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().languageCode = 'ko';
    await firebase.auth().signInWithPopup(provider);
  };

  return (
    <React.Fragment>
      <h2>로그인하세요</h2>
      <button onClick={handleLogin}>로그인</button>
    </React.Fragment>
  );
};
