import React from 'react'
import Counter from '../counter/counter.component';
import ContentCard from '../content-card/content-card.component';
import { counetrsContent } from '../../application-data/counters-content';
import { cardContent } from '../../application-data/content-card-data'

import './info-section.style.scss'


const InfoSection = () => {
  
    return (

        <div className='info-section-wrapper'>

            <div className="counter-container">
                {counetrsContent.map((counterItem, index) => {
                    return <Counter
                        key={index}
                        countFrom={counterItem.countFrom}
                        countTo={counterItem.countTo}
                        content={counterItem.content}
                        countAddOn={counterItem.countAddOn}
                    />
                })}
            </div>

            <div id='card-content-container' className="card-content-container">
                {cardContent.map((cardItem, index) => {
                    const imgSide = (index % 2 === 0)
                        ? 'right'
                        : 'left';
                    return <ContentCard
                        key={cardItem.url}
                        url={cardItem.url}
                        title={cardItem.title}
                        subtitle={cardItem.subtitle}
                        content={cardItem.content}
                        imgSide={imgSide}
                    />
                })}
            </div>
            <div className="logos-image-container" data-aos="fade-in">
                <img src="https://i.ibb.co/3pbDg6T/Logos-maller.png" alt="поливни макари марки" />
            </div>
        </div>
    )
}

export default InfoSection