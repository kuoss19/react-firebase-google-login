import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const config = {
  apiKey: 'AIzaSyD3TteSSkkkQxWvg6DGVZa4LyI2RPc210w',
  authDomain: 'kuoss19.firebaseapp.com',
  databaseURL: 'https://kuoss19.firebaseio.com',
  projectId: 'kuoss19',
  storageBucket: 'kuoss19.appspot.com',
  messagingSenderId: '305272620712',
  appId: '1:305272620712:web:6e7ce02b946de8aa57249d',
  measurementId: 'G-ZG9PJES482'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
