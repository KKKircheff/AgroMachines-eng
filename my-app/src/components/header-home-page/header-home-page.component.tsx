import React from 'react'
import Button from '../button/button.component'
import headerImage from '../../images-application/header-image.jpg'
import './header-home-page.style.scss'

const HeaderHomePage = () => {

  return (
    <div className="header-home-page-wrapper">
      <div className="left-side" >
        <h1 data-aos="fade-right">ПОЛИВНИ СИСТЕМИ </h1>
        <h1 data-aos="fade-right" data-aos-delay="100">ВТОРА УПОТРЕБА</h1>
        <h1 data-aos="fade-right" data-aos-delay="200">ОТ НИДЕРЛАНДИЯ</h1>
        <Button id='header-button'
                buttonType={''}
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-anchor=".left-side"
                >Контакт</Button>
      </div>
      <div className="right-side"  data-aos="fade-left">
        <img src={headerImage} alt="поливна макара" />
      </div>
    </div>
  )
}
export default HeaderHomePage