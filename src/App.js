import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
