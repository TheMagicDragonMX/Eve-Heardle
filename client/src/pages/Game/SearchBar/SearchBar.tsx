import React from "react";

import search from "media/search.png"

import "./SearchBar.scss"

const SearchBar = () => {

  /**
   * Changes the input container border color depending if
   * the input is focused or not
   * 
   * @param focused the state of the input
   */
  function changeSearchBarBorder (focused: boolean) {
    const searchBarContainer = document.getElementById("search-bar-container") as HTMLDivElement;
    const grayish = "rgb(141, 141, 141)"
    const green = "rgb(77, 145, 47)"
    
    searchBarContainer.style.borderColor = focused ? green : grayish;
  }
  
  return (
    <div id="search-bar">
      <div id="search-bar-container">
        <img src={ search } alt="[ ]" />

        <input 
          type="text" 
          className="choose-song-input" 
          placeholder="Know it? Search for a song name"
          onFocus={ () => changeSearchBarBorder(true) }
          onBlur={ () => changeSearchBarBorder(false) } />
      </div>
    </div>
  )
} 

export default SearchBar