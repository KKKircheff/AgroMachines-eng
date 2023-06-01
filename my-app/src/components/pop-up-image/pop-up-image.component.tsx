import React, { useEffect } from 'react';
import './pop-up-image.styles.scss';

type PopUpProps = {
  url: string;
  isClicked: boolean;
  setIsClicked: (newValue: boolean) => void;
};

const PopUpImage = ({ url, isClicked, setIsClicked }: PopUpProps) => {
    
  

  const handelClick=(()=>{
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