import React from "react";

import Attempt from "./Attempt/Attempt";
import SearchBar from "./SearchBar/SearchBar";

import "./Game.scss"

const Game = () => {
  return (
    <div id="game">
      <ul id="list-of-attempts">
        <Attempt songName="Danger Close" isCorrect={ false } />
        <Attempt songName="Danger Close" isCorrect={ false } />
        <Attempt songName="Danger Close" isCorrect={ false } />
        <Attempt songName="Danger Close" isCorrect={ false } />
        <Attempt songName="Danger Close" isCorrect={ true } />
      </ul>

      <audio src="https://youtu.be/H-u9O2eG8qQ" controls></audio>

      <SearchBar />

      <div id="controls-container">
        <button id="skip">SKIP</button>
        <button id="submit">SUBMIT</button>
      </div>
    </div>
  )
}

export default Game