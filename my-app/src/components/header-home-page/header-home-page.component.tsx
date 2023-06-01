import React from 'react'
import Button from '../button/button.component'
import headerImage from '../../images-application/header-image.jpg'
import './header-home-page.style.scss'
import { Link } from 'react-scroll'

const HeaderHomePage = () => {

  return (
    <div id='header-home-page-wrapper' className="header-home-page-wrapper">
      <div className="left-side" >
        <h1 data-aos="fade-right">ПОЛИВНИ СИСТЕМИ </h1>
        <h1 data-aos="fade-right" data-aos-delay="100">ВТОРА УПОТРЕБА</h1>
        <h1 data-aos="fade-right" data-aos-delay="200">ОТ НИДЕРЛАНДИЯ</h1>
        <Link activeClass="active" to="contact-form-container" spy={true} smooth={true} offset={-100} duration={2000}>

          <Button id='header-button'
            buttonType={''}
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-anchor=".left-side"
          >Контакт</Button>

        </Link>
      </div>
      <div className="right-side" data-aos="fade-left">
        <img src={headerImage} alt="поливна макара" />
      </div>
    </div>
  )
}
export default HeaderHomePage