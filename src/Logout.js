import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export default ({ username }) => {
  const handleLogout = async _event => {
    await firebase.auth().signOut();
  };

  return (
    <React.Fragment>
      <h2>{username}님, 안녕하세요</h2>
      <button onClick={handleLogout}>로그아웃</button>
    </React.Fragment>
  );
};
