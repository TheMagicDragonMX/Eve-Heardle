import React from "react";

import Attempt from "./Attempt/Attempt";
import SearchBar from "./SearchBar/SearchBar";

import "./Game.scss"

const Game = () => {

  async function testSoundcloud () {
    console.log("Fetching Soundcloud 🔊");
    // Track ID: 290275679

    const response = await fetch("")

  }

  return (
    <div id="game">
      <ul id="list-of-attempts">
        <Attempt songName="Danger Close" isCorrect={ false } />
        <Attempt songName="Danger Close" isCorrect={ false } />
        <Attempt songName="Danger Close" isCorrect={ false } />
        <Attempt songName="Danger Close" isCorrect={ false } />
        <Attempt songName="Danger Close" isCorrect={ true } />
      </ul>

      <div id="track-player">
        <button onClick={ () => testSoundcloud() }>Retrieve track</button>
      </div>

      <SearchBar />

      <div id="controls-container">
        <button id="skip">SKIP</button>
        <button id="submit">SUBMIT</button>
      </div>
    </div>
  )
}

export default Game