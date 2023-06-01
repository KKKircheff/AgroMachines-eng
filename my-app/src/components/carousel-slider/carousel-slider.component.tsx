import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { isMobile } from 'react-device-detect';
import { renderArrowNext, renderArrowPrev, renderIndicator } from '../../utils/custom_carousel_controls';
import './carousel-slider.styles.scss';

type SliderProps = {
    url: string[];
    isClicked: boolean;
    setIsClicked: (newValue: boolean) => void;
    setPopUpUrl: (newValue: string) => void;
  };

const CarouselSlider = ({url,isClicked,setIsClicked,setPopUpUrl}:SliderProps) => {
  
    const handleClick = (e: number) => {
      console.log(url[e]);
      setPopUpUrl(url[e])
      setIsClicked(true);
    }

    const renderImages:() => JSX.Element[] = () => {
        return url.map((imageUrl, index) => {
         return (
              <div key={imageUrl}>
                <img src={imageUrl} alt='поливна макра система втора употреба снимки'/>
              </div>
            )
          })
        }

    return (
        <div className="carousel-slider-wrapper">
        <Carousel
            renderArrowPrev={renderArrowPrev}
            renderArrowNext={renderArrowNext}
            renderIndicator={renderIndicator}
            emulateTouch={true}
            showThumbs={false}
            swipeable={true}
            showStatus={false}
            showArrows={!isMobile}
            onClickItem={handleClick}
          >{renderImages()}
          </Carousel>
          </div>
  )
}
export default CarouselSlider