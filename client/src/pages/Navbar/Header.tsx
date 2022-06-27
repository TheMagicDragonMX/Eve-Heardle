import React from "react";
import ImageButton from "Tools/ImageButton/ImageButton";

import info from "media/info.png"
import love from "media/love.png"
import stats from "media/stats.png"
import howToPlay from "media/how-to-play.png"

import "./Header.scss"


const Header = () => {
  return (
    <header id="header">
      <span>
        <ImageButton src={ info } alt="Info" size={30} onClick={ () => 0 }/>
        <ImageButton src={ love } alt="Like" size={30} onClick={ () => 0 }/>
      </span>

      <h1>Eve Heardle</h1>

      <span>
        <ImageButton src={ stats } alt="Stats" size={30} onClick={ () => 0 }/>
        <ImageButton src={ howToPlay } alt="How 2 Play" size={30} onClick={ () => 0 }/>
      </span>
    </header>
  )
}

export default Header