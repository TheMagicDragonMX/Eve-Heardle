import React from 'react';

import Game from 'pages/Game/Game';

import "App.scss"
import Navbar from 'pages/Navbar/Navbar';

function App() {
  return (
    <div id="app">
      <Navbar />
      <hr />
      
      <Game />
    </div>
  );
}

export default App;
