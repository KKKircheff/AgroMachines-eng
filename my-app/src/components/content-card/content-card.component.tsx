import React from 'react';
import './content-card.style.scss';

type CardProps = {
  url: string,
  title: string,
  subtitle: string,
  content: string,
  imgSide: 'left' | 'right',
}

const ContentCard = ({ url, title, subtitle, content, imgSide }: CardProps) => {
  
  return (
    <div className={`content-card ${imgSide}`}  data-aos="fade-in">
      <img src={url} alt="irrigation reel tumbnail" />
      <div className="content-section"  >
        <div className='title-section-container'>
        <h2 className='title' data-aos={`fade-${imgSide}`}>{title}</h2>
        <h3 className='subtitle' data-aos={`fade-${imgSide}`}>{subtitle}</h3>
        </div>
        <p className='content' data-aos={`fade-${imgSide}`}>{content}</p>
      </div>
    </div>
  )
}

export default ContentCard