import React from "react";

import "./ImageButton.scss"

interface ImageButtonProps {
  src: string;
  alt?: string;
  className?: string;

  onClick: () => void;
}

const ImageButton = (props: ImageButtonProps) => {
  return (
    <button 
      className={`image-button ${ props.className }`} 
      onClick={ () => props.onClick() }>
      
      <img src={ props.src } alt={ props.alt ? props.alt : "Button" } />
    </button>
  )
}

export default ImageButton