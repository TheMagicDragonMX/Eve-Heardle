import React from 'react';

import Game from 'pages/Game/Game';

import "App.scss"
import Header from 'pages/Navbar/Header';

function App() {
  return (
    <div id="app">
      <Header />
      {/* <hr /> */}
      
      <Game />
    </div>
  );
}

export default App;
