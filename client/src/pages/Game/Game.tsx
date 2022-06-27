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

      <SearchBar />

      <span className="controls-container">
        <button id="skip">SKIP</button>
        <button id="submit">SUBMIT</button>
      </span>
    </div>
  )
}

export default Game