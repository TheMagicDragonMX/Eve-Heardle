import React from "react";
import ImageButton from "Tools/ImageButton/ImageButton";

import "./Navbar.scss"

import info from "Media/info.png"

const Navbar = () => {
  return (
    <nav id="navbar">
      <button>Info</button>

      <h1>Eve Heardle</h1>

      <button>Stats</button>
      <button>How to play</button>
    </nav>
  )
}

export default Navbar