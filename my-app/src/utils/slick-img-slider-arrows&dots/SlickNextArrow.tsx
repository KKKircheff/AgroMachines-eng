import React, {CSSProperties} from 'react';
import {TfiAngleRight} from 'react-icons/tfi'


interface Style extends CSSProperties {
  background: string,
  display:string,
}


export type SlickArrowProps ={
    className?: string,
    style?:Style,
    onClick?:()=>void
}

export default function SlickNextArrow(props:SlickArrowProps) {
  
  const { className, style, onClick } = props;
  return (
    <div
        className={'slick-carousel-arrows'}
        style={{
                 position: 'absolute',
                 border:'0px solid white',
                 padding:0,
                 margin: 0,
                 backgroundColor: 'transparent',
                 fontSize:'30px',
                 color:'white',
                 zIndex: 1,
                 top: 'calc(50% - 50px)',
                 width: 30,
                 height: 30,
                 cursor: 'pointer', 
                 right: 15,
                   }}
        onClick={onClick}
      >
        <p>
          <TfiAngleRight />
        </p>
      </div>
    );
  }