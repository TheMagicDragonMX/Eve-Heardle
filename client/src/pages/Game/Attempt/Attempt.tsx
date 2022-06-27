import React from "react";

import crossImage from "media/red-cross.png"
import checkmark from "media/checkmark.png"

import "./Attempt.scss"

interface AttemptProps {
  songName: string;
  isCorrect: boolean;
}

const Attempt = (props: AttemptProps) => {
  return (
    <div className="attempt">
      <img
        src={ props.isCorrect ? checkmark : crossImage }
        className="attempt-status" />

      <p>{ props.songName }</p>
    </div>
  )
}

export default Attempt;