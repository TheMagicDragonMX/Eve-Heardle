import React from "react";
import ImageButton from "Tools/ImageButton/ImageButton";

import "./Header.scss"

import info from "Media/info.png"

const Header = () => {
  return (
    <header id="header">
      <span>
        <button>Info</button>
        <button>Like</button>
      </span>

      <h1>Eve Heardle</h1>

      <span>
        <button>Stats</button>
        <button>How to play</button>
      </span>
    </header>
  )
}

export default Header