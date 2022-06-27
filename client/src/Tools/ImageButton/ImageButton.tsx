import React from "react";

import "./ImageButton.scss"

interface ImageButtonProps {
  src: string;
  size: number;
  alt?: string;
  className?: string;

  onClick: () => void;
}

const ImageButton = (props: ImageButtonProps) => {
  return (
    <button 
      className={`image-button ${ props.className ? props.className : "" }`} 
      onClick={ () => props.onClick() }>
      
      <img 
        src={ props.src } 
        width={`${ props.size }rem`}
        alt={ props.alt ? props.alt : "Button" } />
    </button>
  )
}

export default ImageButton