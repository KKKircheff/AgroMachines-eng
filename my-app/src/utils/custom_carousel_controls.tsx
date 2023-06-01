import React, {CSSProperties} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {TfiAngleLeft,TfiAngleRight} from 'react-icons/tfi'

export const arrowStyles: CSSProperties = {
    position: 'absolute',
    border:'0px solid white',
    backgroundColor: 'transparent',
    fontSize:'20px',
    color:'white',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer', 
};

export const indicatorStyles: CSSProperties = {
    background: '#76B82A',
    border:'1px solid white',
    width: 8,
    height: 8,
    display: 'inline-block',
    margin: '0 8px',
};

export const renderArrowPrev = (onClickHandler: () => void, hasPrev: boolean, label: string): React.ReactNode => {
  return hasPrev ? (
    <button
    className='button-arrow-carousel'
     type="button" 
     onClick={onClickHandler} 
     title={label} 
     style={{ ...arrowStyles, left: 15 }}
     >
      <TfiAngleLeft />
    </button>
  ) : null;
};
export const renderArrowNext = (onClickHandler: () => void, hasNext: boolean, label: string): React.ReactNode => {
  return hasNext ? (
    <button
     className='button-arrow-carousel'
     type="button" 
     onClick={onClickHandler} 
     title={label} 
     style={{ ...arrowStyles, right: 15 }}
     >
      <TfiAngleRight />
    </button>
  ) : null;
};

export const renderIndicator = (
  onClickHandler: (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void,
  isSelected: boolean,
  index: number,
  label: string
): React.ReactNode => {
  if (isSelected) {
    return (
      <li
        key={index}
        style={{ ...indicatorStyles, background: '#B7E97D' }}
        aria-label={`Selected: ${label} ${index + 1}`}
        title={`Selected: ${label} ${index + 1}`}
      />
    );
  }
  return (
    <li
      style={indicatorStyles}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
      title={`${label} ${index + 1}`}
      aria-label={`${label} ${index + 1}`}
    />
  );
};
