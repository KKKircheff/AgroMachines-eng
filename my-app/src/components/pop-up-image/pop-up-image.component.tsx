import React from 'react';
import './pop-up-image.styles.scss';
const bodyScroll = require('body-scroll-toggle');

type PopUpProps = {
  url: string;
  isClicked: boolean;
  setIsClicked: (newValue: boolean) => void;
};

 
const PopUpImage = ({ url, isClicked, setIsClicked }: PopUpProps) => {

  if (window.innerWidth<720) {
    bodyScroll.enable();
    setIsClicked(false);
    }

  const handelClick = (() => {
    bodyScroll.enable();
    setIsClicked(false);
  
  })

  return (
    <div
      onClick={handelClick}
      className={`${isClicked ? 'screen-overlay-active' : 'screen-overlay'}`}
    >
      {isClicked && <img src={url} alt="" />}
    </div>
  );
};

export default PopUpImage;