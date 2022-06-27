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
    </div>
  )
}

export default Game