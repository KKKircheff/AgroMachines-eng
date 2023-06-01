import React, { useState } from 'react';
import { GiWaterRecycling } from 'react-icons/gi'
import PopUpImage from '../pop-up-image/pop-up-image.component'
// import CarouselSlider from '../carousel-slider/carousel-slider.component';
import './product.card.style.scss';
const CarouselSlider = React.lazy(() => import('../carousel-slider/carousel-slider.component'));

type CardProps = {
  url: string[],
  mainTitle: string;
  title: string,
  subtitle: string,
  content: string,
  price: number,
  imgSide: 'left' | 'right',
}


const ProductCard = ({ url, mainTitle, title, subtitle, content, price, imgSide }: CardProps) => {

  const [isClicked, setIsClicked] = useState(false);
  const [popUpUrl, setPopUpUrl] = useState('');

  return (
    <>
      {isClicked &&
        <PopUpImage
          url={popUpUrl}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      }
      <div className={`product-card ${imgSide}`}>
        <div className="carousel-wrapper">
          {/* <img src="https://i.ibb.co/CM58BDr/img-reel-1.jpg" alt="" /> */}
          <CarouselSlider 
                url={url}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                setPopUpUrl={setPopUpUrl}
                />
        </div>

        <div className="content-section" >
          <div className="top-banner-title-section" data-aos="fade-right">
            <p>избрана оферта</p>
          </div>
          <div className="top-banner-icon-section" data-aos="fade-left">
            <p><GiWaterRecycling /></p>
          </div>
          <div className="title-group" data-aos="zoom-in">
            <h2 className='product-card-title'>{mainTitle}</h2>
            <h2 className='product-card-subtitle'>Mарка: <span>{title}</span></h2>
            <h2 className="product-card-subtitle">Помпа: <span>{subtitle}</span></h2>
          </div>
          <h4 data-aos="zoom-in">Цена: <span>{price} лева</span></h4>
          <p className="product-card-content" data-aos="zoom-in">{content}</p>
        </div>

      </div>
    </>
  )
}

export default ProductCard